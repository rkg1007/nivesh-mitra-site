"use client";
import Image from "next/image";
import { useState } from "react";
import { FeatureTab } from "@/types/featureTab";
import featuresTabData from "@/data/feature-tab";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <section className="relative pb-20 pt-18.5 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        <div className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5">
          <div
            onClick={() => setCurrentTab("tabOne")}
            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
              currentTab === "tabOne"
                ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                : ""
            }`}
          >
            <div className="md:w-3/5 lg:w-auto">
              <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                Our Focus
              </button>
            </div>
          </div>
          <div
            onClick={() => setCurrentTab("tabTwo")}
            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
              currentTab === "tabTwo"
                ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                : ""
            }`}
          >
            <div className="md:w-3/5 lg:w-auto">
              <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                Our Vision
              </button>
            </div>
          </div>
          <div
            onClick={() => setCurrentTab("tabThree")}
            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
              currentTab === "tabThree"
                ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                : ""
            }`}
          >
            <div className="md:w-3/5 lg:w-auto">
              <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                Our Mission
              </button>
            </div>
          </div>
        </div>

        <div className="animate_top mx-auto max-w-c-1154">
          {featuresTabData.map((feature: FeatureTab, key) => {
            const { title, desc1, desc2, image, imageDark } = feature;

            return (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <div className="flex items-center gap-8 lg:gap-19">
                  <div className="md:w-1/2">
                    <p className="mb-5">{desc1}</p>
                    <p className="w-11/12">{desc2}</p>
                  </div>
                  <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="dark:hidden"
                    />
                    <Image
                      src={imageDark}
                      alt={title}
                      fill
                      className="hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesTab;
