"use client";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useState, useEffect } from "react";
import clsx from "clsx";

interface TabItem {
  value: string;
  label: string;
}

const tabData = {
  overview: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  ],
  impact: [
    "Impact content goes here. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    "Nunc ut sem vitae risus tristique posuere.",
  ],
  aim: [
    "What you get content here. Ut commodo diam libero vitae erat.",
    "Suspendisse varius enim in eros elementum tristique.",
  ],
};

const SummaryTabs = () => {
  const [currentTab, setCurrentTab] = useState<string>("overview");
  const [tabBody, setTabBody] = useState<string[]>(tabData.overview);

  const tabs: TabItem[] = [
    { value: "overview", label: "Overview" },
    { value: "impact", label: "Impact" },
    { value: "aim", label: "What you get" },
  ];

  useEffect(() => {
    setTabBody(tabData[currentTab as keyof typeof tabData] || tabData.overview);
  }, [currentTab]);

  return (
    <div className=" lg:w-[480px] max-w-[480px] md:w-96 sm:w-80">
      <div className="headers flex sm:gap-4 gap-2  border-b-2 border-gray-100 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setCurrentTab(tab.value)}
            className={clsx(
              " px-2 mr-1 sm:px-4 py-2 font-semibold md:font-medium",
              currentTab === tab.value
                ? "border-b-2 border-[#F2C94C] "
                : "border-b-2 border-transparent"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="body py-4 sm:py-6">
        {tabBody.map((text, index) => (
          <p key={index} className=" py-1 sm:py-2">{text} </p>
        ))}
      </div>
    </div>
  );
};

export default SummaryTabs;
