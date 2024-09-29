"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import { filterBlogsByCategory, getUniqueCategories } from "@/data/blogs";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import BlogCard from "../Common/BlogCard";

const Blog = () => {
  const params = useSearchParams();
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedCategory = params.get("category") || "all";
  const [categories, setCategories] = useState([
    "all",
    ...getUniqueCategories(),
  ]);
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredBlogs = filterBlogsByCategory(activeCategory);

  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory == "all" || !scrollRef.current) return;
    const unSelectedCategories = categories.filter(
      (category) => category.toLowerCase() != selectedCategory.toLowerCase()
    );
    setCategories(["all", selectedCategory, ...unSelectedCategories.slice(1)]);
    scrollRef.current.scrollLeft = 0;
  }, [selectedCategory, scrollRef.current]);

  return (
    <section className="pb-15 pt-5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "Browse by Category",
            description: "Select a category to see more related content",
          }}
        />

        <Suspense>
          <div className="py-5 md:py-10">
            <div className="flex justify-center items-center">
              <div
                ref={scrollRef}
                className="mb-10 md:mb-15 flex overflow-x-auto items-center gap-4 scrollbar-hide"
              >
                {categories.map((categoryItem) => {
                  const currentCategoryBlogs =
                    filterBlogsByCategory(categoryItem);
                  const categoryPostCount = currentCategoryBlogs.length;

                  return (
                    <button
                      onClick={() => setActiveCategory(categoryItem)}
                      key={categoryItem}
                      className={`rounded-full border px-4.5 py-2.5 font-medium capitalize duration-200 ease-in hover:border-dark hover:bg-dark hover:text-white whitespace-nowrap ${
                        activeCategory === categoryItem
                          ? "border-dark bg-dark text-white"
                          : "border-gray-3 bg-gray text-dark"
                      }`}
                    >
                      {categoryItem} (
                      {categoryPostCount < 10
                        ? "0" + categoryPostCount
                        : categoryPostCount}
                      )
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <div>
                <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredBlogs.map((blog: any, idx: number) => (
                    <BlogCard key={idx} blog={blog} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Blog;
