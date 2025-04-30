import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface Button {
  href: string;
  label: string;
  target?: "_self" | "_blank";
  disabled?: boolean;
  className?: string;
  bg?: string;
  ariaLabel?: string;
}

const ReadMoreButton = ({
  href,
  label,
  target,
  bg,
  className,
  disabled = false,
  ariaLabel,
}: Button) => {
  return (
    <div
      className={clsx(
        "h-9 w-28 md:h-12 md:w-36 rounded-sm flex items-center justify-center",
        {
          [bg || ""]: bg,
          "bg-white": !bg,
          "opacity-50 cursor-not-allowed": disabled,
        }
      )}
    >
      <Link
        href={disabled ? "#" : href}
        target={target}
        aria-label={ariaLabel || label}
      >
        {label}
      </Link>
    </div>
  );
};

export default ReadMoreButton;
