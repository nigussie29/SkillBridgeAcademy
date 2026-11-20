// This public intake connection deliberately does not import the academy Auth
// client. No academy access token, service key, or AI key belongs in this request.
const SLUG = /^[a-z][a-z0-9-]{2,59}$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const GRADE_OPTIONS = ['K', ...Array.from({ length: 12 }, (_, i) => String(i + 1)), 'College', 'Adult', 'Not sure'];

function isPublicKey(value) {
  if (!value || value.startsWith('sb_secret_')) return false;
  if (value.startsWith('sb_publishable_')) return true;
  try {
    const encoded = value.split('.')[1].replaceAll('-', '+').replaceAll('_', '/');
    const payload = JSON.parse(atob(encoded.padEnd(Math.ceil(encoded.length / 4) * 4, '=')));
    return payload.role === 'anon';
  } catch { return false; }
}

export function getTutoringConfig(env = import.meta.env || {}) {
  if (env.VITE_LUMINARY_INQUIRY_ENABLED !== 'true') return null;
  try {
    const url = new URL(env.VITE_LUMINARY_SUPABASE_URL);
    const local = ['localhost', '127.0.0.1'].includes(url.hostname);
    if ((!local && (url.protocol !== 'https:' || !url.hostname.endsWith('.supabase.co')))
      || (local && !['http:', 'https:'].includes(url.protocol))
      || url.username || url.password || url.search || url.hash || url.pathname !== '/') return null;
    const key = String(env.VITE_LUMINARY_ANON_KEY || '').trim();
    const slug = String(env.VITE_LUMINARY_WORKSPACE_SLUG || '').trim();
    const sitekey = String(env.VITE_LUMINARY_TURNSTILE_SITE_KEY || '').trim();
    if (!isPublicKey(key) || !SLUG.test(slug) || !sitekey) return null;
    return { endpoint: `${url.origin}/functions/v1/automation`, key, slug, sitekey };
  } catch { return null; }
}

export function createTutoringPayload(config, fields, token, submissionKey) {
  if (!config) throw new Error('Online tutoring requests are not open yet.');
  const name = String(fields.name || '').trim();
  const email = String(fields.email || '').trim().toLowerCase();
  const subject = String(fields.subject || '').trim();
  const grade = String(fields.grade || '');
  const support = String(fields.support || '').trim();
  const note = String(fields.message || '').trim();
  if (name.length < 2 || name.length > 100) throw new Error('Enter your name (2–100 characters).');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) throw new Error('Enter a valid email address.');
  if (!subject || subject.length > 80) throw new Error('Enter the subject you need help with.');
  if (!GRADE_OPTIONS.includes(grade)) throw new Error('Choose a grade or learning level.');
  if (support.length > 100) throw new Error('Keep the requested support under 100 characters.');
  if (note.length < 10 || note.length > 3000) throw new Error('Describe your learning needs in 10–3,000 characters.');
  if (fields.consent !== true) throw new Error('Permission to contact you is required.');
  if (fields.website) throw new Error('Please refresh the form and try again.');
  if (!token) throw new Error('Complete the verification before sending.');
  if (!UUID.test(submissionKey || '')) throw new Error('Refresh this page before sending your request.');
  return {
    action: 'public_intake', slug: config.slug, name, email, consent: true,
    message: [
      `Subject: ${subject}`,
      grade === 'Not sure' ? 'Grade level: not specified' : `Grade ${grade}`,
      `Requested support: ${support || 'Please help me choose'}`,
      '', note,
    ].join('\n'),
    website: '', captcha_token: token, submission_key: submissionKey,
  };
}

async function request(config, payload, { fetcher = fetch, signal } = {}) {
  const response = await fetcher(config.endpoint, {
    method: 'POST', credentials: 'omit',
    headers: { 'Content-Type': 'application/json', apikey: config.key },
    body: JSON.stringify(payload), signal: signal || AbortSignal.timeout(45000),
  });
  let data;
  try { data = await response.json(); } catch { throw new Error('We could not confirm your request. Please try again.'); }
  if (!response.ok || data.error) {
    if (/verification failed/i.test(data.error || '')) throw new Error('Please complete verification again and resend.');
    throw new Error('We could not confirm your request. Please try again shortly.');
  }
  return data;
}

export async function checkTutoringIntake(config, options) {
  if (!config) return { enabled: false };
  const result = await request(config, { action: 'public_config', slug: config.slug }, options);
  if (typeof result.name !== 'string' || typeof result.enabled !== 'boolean') throw new Error('The inquiry form is temporarily unavailable.');
  return result;
}

export async function submitTutoringInquiry(config, fields, token, submissionKey, options) {
  const payload = createTutoringPayload(config, fields, token, submissionKey);
  const result = await request(config, payload, options);
  if (result.ok !== true) throw new Error('We could not confirm your request. Please try again.');
  return { ok: true };
}

let turnstileLoad;
export function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (turnstileLoad) return turnstileLoad;
  turnstileLoad = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    const timeout = setTimeout(() => { script.remove(); reject(new Error('Verification could not load. Please try again.')); }, 15000);
    script.onload = () => {
      clearTimeout(timeout);
      if (window.turnstile) resolve(window.turnstile);
      else { script.remove(); reject(new Error('Verification could not load. Please try again.')); }
    };
    script.onerror = () => { clearTimeout(timeout); script.remove(); reject(new Error('Verification could not load. Please try again.')); };
    document.head.append(script);
  }).catch(error => { turnstileLoad = null; throw error; });
  return turnstileLoad;
}
