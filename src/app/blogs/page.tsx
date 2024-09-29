import React from "react";
import { Metadata } from "next";
import Blog from "@/components/Blog/Blog";

export const metadata: Metadata = {
  title: "Nivesh Mitra | Contact Us",
  description: "This is contact page for nivesh mitra",
};

const BlogPage = () => {
  return (
    <div className="pb-20 pt-25">
      <Blog />
    </div>
  );
};

export default BlogPage;
