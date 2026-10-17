# Connect academy tutoring inquiries to Luminary Automation

Status: source integration prepared and tested locally. Live Supabase, Cloudflare Turnstile, AI, and email credentials have not been configured or verified. Keep the feature disabled until the live smoke test passes.

## What this adds

- A public `/request-tutoring` page collecting a parent/guardian or adult learner’s name, email, subject, grade/level, preferred support, learning needs, and permission to contact them.
- A “Request Tutoring” link on the homepage and Contact page, visible only after explicit configuration.
- Direct submission to the Luminary Supabase Edge Function using its public key. No academy session token is sent, and the existing academy login is not used for this form.
- Server readiness checks, Turnstile verification, a stable submission UUID for retries, and a success screen only after the server confirms receipt.
- The Luminary server resolves the workspace from the configured slug. The browser cannot choose a private workspace ID, change a lead stage, read staff records, or send an approved message.

The existing general Contact form remains outside this change. Its Send Message button currently has no submission handler. This integration adds a working path specifically for tutoring inquiries once configured.

No DNS change is needed for `/request-tutoring`; the existing Vercel SPA rewrite serves this route. The Luminary staff Site can stay private. The public academy form talks to the public-intake endpoint on Supabase, not to the private staff Site.

## 1. Set up the Luminary backend

Create a **separate Supabase project** named `luminary-automation`. Do not run Luminary’s database migration against the academy’s existing course database.

From the Luminary Automation source project, follow its README to apply `supabase/migrations/202610170001_luminary.sql`, deploy the `automation` Edge Function, and configure staff login. For your own academy, activate your own verified owner account in `private.pilot_owners`; no invoice or payment to yourself is required.

Create a Luminary workspace named **KingsNigus Academy** with the proposed slug **`kingnigus-academy`**. The actual slug must match the client configuration below. Approve the real service catalog, prices, hours/timezone, and FAQs in Center settings. Leave prices blank until approved.

## 2. Create a Turnstile widget

Create a Cloudflare Turnstile widget that allows these exact hostnames:

```text
kingnigusacademy.com
www.kingnigusacademy.com
```

Use its public site key in the academy build and its secret key only in Supabase Edge Function secrets. Add a preview hostname only if you need a staging test; do not use a wildcard.

The widget uses `action: inquiry`. The server verifies success, the action, the allowed hostname, and its match to the request’s browser Origin. Client-only verification is insufficient.

## 3. Set the Luminary Edge Function secrets

```dotenv
APP_ORIGIN=https://luminary-automation.amused-daisy-3735.chatgpt.site
INQUIRY_ALLOWED_ORIGINS=https://kingnigusacademy.com,https://www.kingnigusacademy.com
TURNSTILE_SECRET_KEY=YOUR_SERVER_ONLY_TURNSTILE_SECRET
TURNSTILE_HOSTNAMES=kingnigusacademy.com,www.kingnigusacademy.com
```

`APP_ORIGIN` remains the exact staff frontend origin. `INQUIRY_ALLOWED_ORIGINS` permits **only public configuration and intake actions** from the academy. It does not grant staff API access. If Luminary’s own frontend will also host a public form, include its hostname in the widget’s allowed hosts and `TURNSTILE_HOSTNAMES` as well. A nonempty plural setting overrides legacy `TURNSTILE_HOSTNAME`.

Supabase supplies its database/service credentials to deployed Edge Functions. Add OpenAI and Resend secrets only through server settings when ready. Without an AI key, drafts are explicitly labeled safe templates. Without email settings, nothing sends. Approval remains a separate staff action.

Deploy the updated Luminary function:

```bash
supabase functions deploy automation
```

## 4. Configure the academy frontend

Keep the academy’s existing `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` for course/auth data. Add these **separate public** values to the academy’s Vercel build environment:

```dotenv
VITE_LUMINARY_INQUIRY_ENABLED=true
VITE_LUMINARY_SUPABASE_URL=https://YOUR_LUMINARY_PROJECT_REF.supabase.co
VITE_LUMINARY_ANON_KEY=YOUR_LUMINARY_PUBLIC_ANON_KEY
VITE_LUMINARY_WORKSPACE_SLUG=kingnigus-academy
VITE_LUMINARY_TURNSTILE_SITE_KEY=YOUR_PUBLIC_TURNSTILE_SITE_KEY
```

Use only an anon/public key here. A service-role key, AI key, email key, or Turnstile secret must never be set under `VITE_*`, because Vite embeds those variables in browser assets. The adapter rejects recognizable secret/service keys as configuration, but this does not make it safe to put secrets in frontend environment variables.

Set these in a preview environment first, then rebuild/redeploy it. Add that preview’s **exact** origin/hostname to the server and widget while testing. When promoting to production, use the production domains above. Do not point this form at the browser-local demo.

## 5. Pass the live smoke test

1. Leave the feature disabled: the two tutoring links must stay hidden; opening `/request-tutoring` must clearly say requests are not open.
2. Enable it in a configured preview. Check that the displayed reviewing-center name is your own workspace, not another center.
3. Try submitting without consent, with an invalid email, and without verification. No inquiry should be accepted.
4. Submit a fictional request using **your own test email**. Confirm one lead and one draft in the KingsNigus workspace, stage New, zero automatic outgoing emails.
5. Retry the same submission UUID. Confirm there is still exactly one inquiry and one draft.
6. Verify a challenge for the wrong hostname and a request from an unlisted origin fail. Academy-origin requests to staff actions must return 403, even with a valid staff JWT.
7. Log into Luminary as the workspace owner. Review and approve the response, test email delivery to yourself, book a future consultation, and mark Enrolled. Confirm one pair of follow-up tasks and the expected cancellations.
8. Verify another workspace cannot read this inquiry or its draft, appointments, reminders, events, or usage.

Only after these pass should the production feature flag be enabled and the change merged/deployed. If the backend’s readiness response says intake is disabled or cannot be loaded, the page must not display a working submission form or claim a successful request.

## Local checks

```bash
node --test tests/tutoringInquiry.test.mjs
npm run build
```

The eight adapter tests cover activation gates, public/secret-key separation, learning-need validation, consent, bot verification, stable submission IDs, no academy token leakage, and no false success. Luminary’s PostgreSQL/HTTP tests separately cover cross-origin intake and workspace authorization. Browser interaction and real-provider behavior still need the live test above.

## Primary references

- [Cloudflare explicit widget rendering](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/)
- [Cloudflare server-side token validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)

Shared academy/Luminary login, inbox ingestion, SMS, billing, and calendar-account sync are later work. This first connection is the public tutoring form and a separately authorized staff workflow.
