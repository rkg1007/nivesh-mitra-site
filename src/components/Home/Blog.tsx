import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import BlogData from "@/data/blog-data";

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 3).map((blog, key) => {
            const { mainImage, title, metadata } = blog;

            return (
              <div
                className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
                key={key}
              >
                <Link
                  href={`/blog/`}
                  className="relative block aspect-[368/239]"
                >
                  <Image src={mainImage} alt={title} fill />
                </Link>

                <div className="px-4">
                  <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
                    <Link href={`/blog/blog-details`}>
                      {`${title.slice(0, 40)}...`}
                    </Link>
                  </h3>
                  <p className="line-clamp-3">{metadata}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
