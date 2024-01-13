import React from "react";
import { motion } from "framer-motion";

export default function SideButton({ children, addItem, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="input-button"
      onClick={(event) => addItem({ event })}
      {...props}
    >
      {children}
    </motion.button>
  );
}
