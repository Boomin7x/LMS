import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: any[];
};

const Marqueez = ({ data }: Props) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{
        x: "-100%",
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      //   variants={marqueeVariants}
      // animate="animate"
      className="w-full flex flex-shrink-0  items-center   "
    >
      {data.map((items) => (
        <div
          key={items}
          className="min-w-[21rem] w-full  mr-10  flex items-start  rounded-lg"
        >
          {items}
        </div>
      ))}
    </motion.div>
  );
};

export default Marqueez;
