import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivesh Mitra | Contact Us",
  description: "This is contact page for nivesh mitra",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-25">
      <Contact />
    </div>
  );
};

export default SupportPage;
