import React from "react";
import Elements from "./Elements";
import { AnimatePresence } from "framer-motion";

export default function Page({ selectedItems }) {
  return (
    <div className="page-container">
      <h1 contentEditable suppressContentEditableWarning>
        Enter your heading here
      </h1>
      <h2 contentEditable suppressContentEditableWarning>
        Enter your subheading
      </h2>
      <AnimatePresence>
        {selectedItems.map((item) => {
          return (
            <Elements
              name={item.name}
              count={item.count}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
