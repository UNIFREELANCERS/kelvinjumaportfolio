import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kelvin Oluoch Juma',
  description: 'Privacy information for the Kelvin Oluoch Juma portfolio website.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[65vh] w-full bg-[#F9FAFB] px-4 py-12 sm:px-6 sm:py-20">
      <article className="mx-auto max-w-3xl rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm sm:p-10">
        <Link
          href="/#home"
          className="inline-flex items-center rounded-full text-sm font-semibold text-[#9A4D1C] hover:text-[#FD853A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD853A]"
        >
          Back to portfolio
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-[#344054] sm:text-4xl">Privacy Policy</h1>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#475467]">
          <p>
            The contact forms on this site open your email application with a
            message addressed to Kelvin. They do not submit or store form data
            on this website. Any email you choose to send is handled by you and
            your email provider.
          </p>
          <p>
            This website uses Vercel Analytics to measure site usage. Vercel
            processes that analytics data as part of providing its service.
          </p>
          <p>
            For questions about privacy or information you have sent by email,
            contact{' '}
            <a
              href="mailto:juma@unifreelancersafrica.org"
              className="font-semibold text-[#9A4D1C] underline underline-offset-4 hover:text-[#FD853A]"
            >
              juma@unifreelancersafrica.org
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
