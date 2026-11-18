import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import ArrowButton from './ArrowButton';
import { Blog as BlogType } from '../../data/data';

interface BlogProps extends BlogType {
  priority?: boolean;
}

const Blog: FC<BlogProps> = ({ image, button, name, date, title, href, priority = false }) => {
  const imageContent = (
    <>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 416px, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        priority={priority}
      />
      {href && (
        <span className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1D2939] text-white transition-colors duration-300 group-hover:bg-[#FD853A] sm:h-16 sm:w-16">
          <ArrowButton className="stroke-white" height={56} width={56} />
        </span>
      )}
    </>
  );

  return (
    <article className="flex h-full w-full max-w-[416px] flex-col overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[416/320] w-full overflow-hidden bg-[#F2F4F7]">
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${button}: ${title}`}
            className="group absolute inset-0 block"
          >
            {imageContent}
          </Link>
        ) : (
          <div className="group absolute inset-0">
            {imageContent}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col items-start gap-5 p-5 sm:p-6">
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#F2F4F7] px-5 py-2 text-sm font-semibold text-[#344054] transition-colors hover:bg-[#FD853A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
          >
            {button}
          </Link>
        ) : (
          <span className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#F2F4F7] px-5 py-2 text-sm font-semibold text-[#344054]">
            {button}
          </span>
        )}

        <div className="flex w-full flex-wrap items-center justify-between gap-2 text-sm">
          <span className="font-medium text-[#344054]">{name}</span>
          <span className="rounded-full bg-[#FFF1E8] px-3 py-1 text-[#9A4D1C]">{date}</span>
        </div>

        <h2 className="text-xl font-semibold leading-snug text-[#344054] sm:text-2xl">
          {title}
        </h2>
      </div>
    </article>
  );
};

export default Blog;
