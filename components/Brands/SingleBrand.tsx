import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: any) => {
  const { title, desciption, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        className="animate_top mx-w-full relative block h-10 w-[200px]"
      >
        <h1 className="text-xl text-black">{title}</h1>
        <p className="text-xs">{desciption}</p>
      </motion.a>
    </>
  );
};

export default SingleBrand;
