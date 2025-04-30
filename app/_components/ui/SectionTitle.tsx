"use client";
import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  styling?: string;
}

const SectionTitle = ({ title, styling }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="lg:w-12 border h-0 border-[#1D2130]"></div>
      <h2 className={clsx("uppercase font-bbold lg:text-base", styling)}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
