'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Download, ExternalLink, X } from 'lucide-react';
import { certifications } from '@/data/data';

export default function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeIndexRef = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const isOpen = activeIndex !== null;
  const activeCertificate = activeIndex === null ? null : certifications[activeIndex];

  const openCertificate = (index: number) => {
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  const closeCertificate = () => {
    activeIndexRef.current = null;
    setActiveIndex(null);
  };

  const showCertificate = (index: number) => {
    const nextIndex = (index + certifications.length) % certifications.length;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeCertificate();
        return;
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const currentIndex = activeIndexRef.current;
        if (currentIndex !== null) {
          showCertificate(currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
        }
        return;
      }

      if (event.key === 'Tab') {
        const dialog = document.getElementById('certificate-dialog');
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href]',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="w-full scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-[71px] lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1298px] flex-col gap-10 sm:gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B4531D]">
            Learning &amp; Credentials
          </p>
          <h2
            id="certifications-heading"
            className="mt-3 text-3xl font-semibold leading-tight text-[#344054] sm:text-4xl lg:text-5xl"
          >
            Certifications &amp; Professional Credentials
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#667085] sm:text-lg">
            Professional certifications demonstrating my commitment to continuous learning,
            technical development and expertise in modern digital technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {certifications.map((certificate, index) => (
            <article
              key={certificate.issuer}
              className="group flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => openCertificate(index)}
                aria-label={`View ${certificate.title} certificate from ${certificate.issuer} enlarged`}
                className="relative block w-full cursor-zoom-in border-b border-[#E4E7EC] bg-[#F8FAFC] p-3 text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#FD853A] sm:p-5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E4E7EC] bg-white">
                  <Image
                    src={certificate.image}
                    alt={`${certificate.issuer} ${certificate.title} certificate awarded to ${certificate.holder}, issued ${certificate.issued}`}
                    width={certificate.width}
                    height={certificate.height}
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="pointer-events-none absolute bottom-6 right-6 rounded-full bg-[#171717]/85 px-4 py-2 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                  View certificate
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#FFF1E8] px-3 py-1 text-sm font-semibold text-[#9A4D1C]">
                    {certificate.issuer}
                  </span>
                  <span className="text-sm text-[#667085]">Issued {certificate.issued}</span>
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-snug text-[#344054] sm:text-2xl">
                  {certificate.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-[#667085]">
                  {certificate.description}
                </p>
                <p className="mt-4 text-sm text-[#475467]">
                  Certificate holder: <span className="font-semibold">{certificate.holder}</span>
                </p>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-[#EAECF0] pt-5">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open original ${certificate.issuer} certificate in a new tab`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#344054] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Open original
                  </a>
                  <a
                    href={certificate.image}
                    download
                    aria-label={`Download original ${certificate.issuer} certificate`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D0D5DD] px-4 py-2 text-sm font-semibold text-[#344054] transition-colors hover:border-[#FD853A] hover:text-[#9A4D1C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
                  >
                    <Download size={16} aria-hidden="true" />
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeCertificate && (
        <div
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeCertificate();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101828]/90 p-3 backdrop-blur-sm sm:p-6"
        >
          <div
            id="certificate-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-dialog-title"
            className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#EAECF0] px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <h2 id="certificate-dialog-title" className="text-lg font-semibold text-[#344054] sm:text-xl">
                  {activeCertificate.title}
                </h2>
                <p className="mt-1 text-sm text-[#667085]">
                  {activeCertificate.issuer} · Issued {activeCertificate.issued}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeCertificate}
                aria-label="Close certificate viewer"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F4F7] text-[#344054] transition-colors hover:bg-[#E4E7EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-[#F8FAFC] p-3 sm:p-6">
              <div className="relative mx-auto h-[min(65vh,760px)] w-full">
                <Image
                  src={activeCertificate.image}
                  alt={`${activeCertificate.issuer} ${activeCertificate.title} certificate awarded to ${activeCertificate.holder}, issued ${activeCertificate.issued}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <button
                type="button"
                onClick={() => showCertificate((activeIndex ?? 0) - 1)}
                aria-label="View previous certificate"
                className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/95 text-[#344054] shadow-md transition-colors hover:bg-[#FFF1E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A] sm:left-4"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => showCertificate((activeIndex ?? 0) + 1)}
                aria-label="View next certificate"
                className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/95 text-[#344054] shadow-md transition-colors hover:bg-[#FFF1E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A] sm:right-4"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#EAECF0] px-4 py-3 sm:px-6">
              <p className="text-sm text-[#667085]">
                Certificate {activeIndex === null ? 0 : activeIndex + 1} of {certifications.length}
                <span className="hidden sm:inline"> · Use arrow keys to browse</span>
              </p>
              <div className="flex gap-3">
                <a
                  href={activeCertificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open original ${activeCertificate.issuer} certificate in a new tab`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white hover:bg-[#344054] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Original
                </a>
                <a
                  href={activeCertificate.image}
                  download
                  aria-label={`Download original ${activeCertificate.issuer} certificate`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#D0D5DD] px-4 py-2 text-sm font-semibold text-[#344054] hover:border-[#FD853A] hover:text-[#9A4D1C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
                >
                  <Download size={16} aria-hidden="true" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
