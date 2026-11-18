'use client';

import { useMemo, useState } from 'react';
import { GenericSlider } from './GenericSlider';
import type { PortfolioItem } from '@/data/data';

interface PortfolioCarouselProps {
  data: PortfolioItem[];
  categories: string[];
}

export default function PortfolioCarousel({ data, categories }: PortfolioCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(
    () => selectedCategory === 'All'
      ? data
      : data.filter((project) => project.categories?.includes(selectedCategory)),
    [data, selectedCategory],
  );

  return (
    <div className="w-full max-w-[1290px] flex flex-col items-center gap-10 lg:gap-12">
      <div id="portfolio-cards" className="w-full scroll-mt-24">
        <GenericSlider
          data={filteredProjects}
          slidesPerView={2}
          heightClass="h-auto"
          cardType="portfolio"
        />
      </div>

      <div role="group" aria-label="Filter portfolio projects" className="w-full max-w-[947px] flex flex-wrap justify-center gap-3 sm:gap-[14px] items-center">
        {['All', ...categories].map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 sm:px-8 py-3 rounded-[24px] text-[14px] sm:text-[16px] lg:text-[18px] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A] ${
                isSelected
                  ? 'bg-[#FD853A] text-white'
                  : 'bg-[#F2F4F7] text-[#000000] hover:bg-[#FD853A] hover:text-white'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {filteredProjects.length} {selectedCategory === 'All' ? '' : `${selectedCategory} `}projects.
      </p>
    </div>
  );
}
