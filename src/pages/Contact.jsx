import { Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import TutoringInquiryLink from "../components/TutoringInquiryLink.jsx";

export default function Contact() {
  return (
    <section className="section py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Let’s connect and build your learning journey.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Have questions about courses, career paths, tutoring, partnerships, or
          technical support? Send a message and we’ll respond as soon as possible.
        </p>
        <TutoringInquiryLink />
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-5">
          <div className="card p-6">
            <Mail className="text-blue-600" size={30} />
            <h2 className="mt-4 text-xl font-bold">Email</h2>
            <p className="mt-2 text-slate-600">support@skillbridgeacademy.com</p>
          </div>

          <div className="card p-6">
            <MapPin className="text-blue-600" size={30} />
            <h2 className="mt-4 text-xl font-bold">Location</h2>
            <p className="mt-2 text-slate-600">Charlotte, North Carolina</p>
          </div>

          <div className="card p-6">
            <Clock className="text-blue-600" size={30} />
            <h2 className="mt-4 text-xl font-bold">Office Hours</h2>
            <p className="mt-2 text-slate-600">
              Monday – Friday, 9:00 AM – 5:00 PM
            </p>
          </div>
        </div>

        <div className="card p-8">
          <div className="flex items-center gap-3">
            <MessageCircle className="text-blue-600" />
            <h2 className="text-2xl font-bold">Send a Message</h2>
          </div>

          <form className="mt-6 space-y-5">
            <div>
              <label className="font-semibold text-slate-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">Subject</label>
              <input
                type="text"
                placeholder="Course question, support, partnership..."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Send Message
              <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
