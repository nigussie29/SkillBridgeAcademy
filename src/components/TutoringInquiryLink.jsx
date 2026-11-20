import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTutoringConfig } from '../services/tutoringInquiry.mjs';

export default function TutoringInquiryLink({ dark = false }) {
  if (!getTutoringConfig()) return null;
  return (
    <Link to="/request-tutoring" className={`mt-6 inline-flex items-center gap-3 rounded-xl border px-5 py-3 text-sm font-bold transition ${dark
      ? 'border-emerald-300/30 bg-emerald-400/10 text-emerald-100 hover:bg-emerald-400/20'
      : 'border-emerald-200 bg-emerald-50 text-emerald-900 hover:bg-emerald-100'}`}>
      <MessageCircle size={19} aria-hidden="true" />
      Request Tutoring
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
