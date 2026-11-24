'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, Images, X } from 'lucide-react';
import type { PortfolioProject } from '@/data/data';

interface PortfolioShowcaseProps {
  projects: PortfolioProject[];
}

interface ActiveScreenshot {
  projectIndex: number;
  screenshotIndex: number;
}

export default function PortfolioShowcase({ projects }: PortfolioShowcaseProps) {
  const [activeScreenshot, setActiveScreenshot] = useState<ActiveScreenshot | null>(null);
  const activeScreenshotRef = useRef<ActiveScreenshot | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const isOpen = activeScreenshot !== null;
  const activeProject = activeScreenshot ? projects[activeScreenshot.projectIndex] : null;
  const screenshot = activeProject && activeScreenshot
    ? activeProject.screenshots[activeScreenshot.screenshotIndex]
    : null;

  const openScreenshot = (projectIndex: number, screenshotIndex = 0) => {
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const next = { projectIndex, screenshotIndex };
    activeScreenshotRef.current = next;
    setActiveScreenshot(next);
  };

  const closeScreenshot = useCallback(() => {
    activeScreenshotRef.current = null;
    setActiveScreenshot(null);
  }, []);

  const showScreenshot = useCallback((offset: number) => {
    const current = activeScreenshotRef.current;
    if (!current) return;
    const currentProject = projects[current.projectIndex];
    const screenshotIndex = (
      current.screenshotIndex + offset + currentProject.screenshots.length
    ) % currentProject.screenshots.length;
    const next = { ...current, screenshotIndex };
    activeScreenshotRef.current = next;
    setActiveScreenshot(next);
  }, [projects]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeScreenshot();
        return;
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        showScreenshot(event.key === 'ArrowRight' ? 1 : -1);
        return;
      }

      if (event.key === 'Tab') {
        const dialog = document.getElementById('portfolio-screenshot-dialog');
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
  }, [closeScreenshot, isOpen, showScreenshot]);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, projectIndex) => (
          <article
            key={project.title}
            className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white shadow-sm transition-shadow hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => openScreenshot(projectIndex)}
              aria-label={`View ${project.title} project screenshots`}
              className="group relative block aspect-[16/10] w-full overflow-hidden bg-[#F2F4F7] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#FD853A]"
            >
              <Image
                src={project.image}
                alt={project.screenshots[0]?.alt ?? `${project.title} project preview`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#171717]/85 px-3 py-1.5 text-xs font-semibold text-white">
                <Images size={14} aria-hidden="true" />
                {project.screenshots.length} {project.screenshots.length === 1 ? 'image' : 'images'}
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <ul aria-label={`${project.title} categories`} className="flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <li
                    key={category}
                    className="rounded-full bg-[#FFF1E8] px-3 py-1 text-xs font-semibold text-[#9A4D1C]"
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-[#344054]">
                {project.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#667085]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3 border-t border-[#EAECF0] pt-4">
                <button
                  type="button"
                  onClick={() => openScreenshot(projectIndex)}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#344054] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
                >
                  <Images size={16} aria-hidden="true" />
                  View screenshots
                </button>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} website in a new tab`}
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#D0D5DD] px-4 py-2 text-sm font-semibold text-[#344054] transition-colors hover:border-[#FD853A] hover:text-[#9A4D1C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
                  >
                    Visit project
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeProject && screenshot && activeScreenshot && (
        <div
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeScreenshot();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101828]/90 p-3 backdrop-blur-sm sm:p-6"
        >
          <div
            id="portfolio-screenshot-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-screenshot-title"
            className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#EAECF0] px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <h2 id="portfolio-screenshot-title" className="text-lg font-semibold text-[#344054] sm:text-xl">
                  {activeProject.title}
                </h2>
                <p className="mt-1 text-sm text-[#667085]">
                  Image {activeScreenshot.screenshotIndex + 1} of {activeProject.screenshots.length}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeScreenshot}
                aria-label="Close project screenshots"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F4F7] text-[#344054] transition-colors hover:bg-[#E4E7EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-[#F8FAFC] p-3 sm:p-6">
              <div className="relative mx-auto h-[min(68vh,780px)] w-full">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              {activeProject.screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => showScreenshot(-1)}
                    aria-label="View previous project image"
                    className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/95 text-[#344054] shadow-md transition-colors hover:bg-[#FFF1E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A] sm:left-4"
                  >
                    <ChevronLeft size={22} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => showScreenshot(1)}
                    aria-label="View next project image"
                    className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/95 text-[#344054] shadow-md transition-colors hover:bg-[#FFF1E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A] sm:right-4"
                  >
                    <ChevronRight size={22} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
