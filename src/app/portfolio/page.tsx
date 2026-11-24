import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import PortfolioShowcase from '@/components/ui/PortfolioShowcase';
import { selectedProjects } from '@/data/data';

export const metadata: Metadata = {
  title: 'Portfolio | Kelvin Oluoch Juma',
  description: 'Explore website development, web application, and graphic design projects by Kelvin Oluoch Juma.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen w-full bg-[#F9FAFB] px-4 py-10 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1298px] flex-col gap-10 sm:gap-12">
        <header className="flex flex-col gap-6">
          <Link
            href="/#project"
            className="inline-flex w-fit items-center gap-2 rounded-full text-sm font-semibold text-[#9A4D1C] transition-colors hover:text-[#FD853A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD853A]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to portfolio
          </Link>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B4531D]">
              Selected Work
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#344054] sm:text-5xl lg:text-6xl">
              Projects &amp; Portfolio
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#667085] sm:text-lg">
              Explore my websites, web applications, community platforms, and graphic design work.
              Open each project to browse its screenshots or visit the live site.
            </p>
          </div>
        </header>

        <PortfolioShowcase projects={selectedProjects} />
      </div>
    </main>
  );
}
