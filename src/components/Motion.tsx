"use client";

import { motion } from "framer-motion";

const Motion = (props: {
  children: any;
  className: string;
  type: "fade";
  duration: number;
}) => {
  const motions = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: props.duration },
    },
  };

  return (
    <motion.div className={props.className} {...motions[props.type]}>
      {props.children}
    </motion.div>
  );
};

export default Motion;
