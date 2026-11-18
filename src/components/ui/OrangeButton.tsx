"use client"; // if you're using Next.js

import React from "react";
import Link from "next/link";

interface OrangeButtonBaseProps {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

type OrangeButtonProps = OrangeButtonBaseProps & (
  | { href: string; onClick?: never }
  | { href?: never; onClick: () => void }
);

const OrangeButton: React.FC<OrangeButtonProps> = ({
  title,
  href,
  onClick,
  className = "",
  type = "button",
}) => {
  const styles = `w-fit min-w-[144px] h-[66px] px-10 py-5 gap-2.5 rounded-[60px] bg-[#FD853A] font-bold text-[20px] text-white cursor-pointer flex items-center justify-center whitespace-nowrap transition-all hover:bg-[#e46e24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD853A] ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {title}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {title}
    </button>
  );
};

export default OrangeButton;
