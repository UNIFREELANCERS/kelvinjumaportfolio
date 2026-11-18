'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Image from 'next/image';

interface EmailContactFormProps {
  variant: 'contact' | 'updates';
}

const recipient = 'juma@unifreelancersafrica.org';

export default function EmailContactForm({ variant }: EmailContactFormProps) {
  const [error, setError] = useState('');
  const isContactForm = variant === 'contact';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = new FormData(event.currentTarget).get('email');
    if (typeof email !== 'string' || !email.trim()) {
      setError('Enter a valid email address.');
      return;
    }

    setError('');
    const subject = isContactForm ? 'Website project inquiry' : 'Portfolio updates request';
    const message = isContactForm
      ? `Please contact me at ${email.trim()} about working together.`
      : `I would like to receive portfolio updates at ${email.trim()}.`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  if (isContactForm) {
    return (
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col items-center justify-between gap-2 px-3 py-2 md:flex-row md:gap-4 md:px-6 md:py-4 rounded-full border border-[#E4E7EC] bg-white"
      >
        <div className="flex w-full min-w-0 items-center gap-2 md:gap-4">
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#FFEAD5] shrink-0">
            <Image src="/sms.svg" alt="" width={24} height={24} />
          </div>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            aria-label="Your email address"
            aria-describedby={error ? 'contact-email-error' : undefined}
            placeholder="Enter Email Address"
            onChange={() => setError('')}
            className="w-full min-w-0 md:flex-1 px-2 sm:px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-fit px-6 md:px-12 py-2 md:py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-lg font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A]"
        >
          Send
        </button>
        {error && <p id="contact-email-error" role="alert" className="text-sm text-red-700">{error}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        aria-label="Email address for portfolio updates"
        aria-describedby={error ? 'updates-email-error' : undefined}
        placeholder="Email Address"
        onChange={() => setError('')}
        className="w-full h-[45px] sm:h-[48px] lg:h-[51px] bg-white text-black text-[14px] sm:text-[15px] lg:text-[16px] px-3 sm:px-4 py-2 sm:py-3 pr-12 rounded-[8px] sm:rounded-[10px] border-none outline-none"
      />
      <button
        type="submit"
        aria-label="Request portfolio updates"
        className="absolute top-0 right-0 h-[45px] sm:h-[48px] lg:h-[51px] w-[45px] sm:w-[48px] lg:w-[51px] bg-[#FD853A] rounded-r-[8px] sm:rounded-r-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e46e24] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg width="20" height="21" className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6.29602 3.48708C3.91012 2.38589 1.36183 4.66673 2.19279 7.15964L3.45424 10.9007C3.59136 11.3074 3.97267 11.5812 4.40182 11.5812H13C13.5523 11.5812 14 12.0289 14 12.5812C14 13.1335 13.5523 13.5812 13 13.5812H4.40182C3.97267 13.5812 3.59136 13.855 3.45424 14.2617L2.19281 18.0028C1.36183 20.4957 3.91012 22.7765 6.29603 21.6754L20.0983 15.3051C22.422 14.2326 22.422 10.9299 20.0983 9.85737L6.29602 3.48708Z" fill="#FCFCFD" />
        </svg>
      </button>
      {error && <p id="updates-email-error" role="alert" className="mt-2 text-sm text-red-200">{error}</p>}
    </form>
  );
}
