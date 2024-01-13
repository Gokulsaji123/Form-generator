import React from "react";
import { motion } from "framer-motion";

export default function ExportButton({ CreatePDFfromHTML }) {
  return (
    <div className="export-container">
      <motion.button
        animate={{boxShadow:"2px 2px 5px"}}
        whileHover={{
          scale: 1.1,
          boxShadow: "4px 4px 5px",
          transition: { ease: "easeInOut" },
        }}
        transition={{ease:'easeInOut'}}
        className="export-button"
        onClick={CreatePDFfromHTML}
      >
        Export to pdf
      </motion.button>
    </div>
  );
}
