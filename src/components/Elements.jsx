import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { DeleteStore } from "../store";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Elements({ name, count, id }) {
  const [hovering, setIsHovering] = useState(false);
  function hoverEnter() {
    setIsHovering(true);
  }
  function hoverLeave() {
    setIsHovering(false);
  }
  let content;
  if (name === "Input") {
    content = <input type="text" className="page-items"></input>;
  }
  if (name === "Text area") {
    content = <textarea type="textarea" className="page-items"></textarea>;
  }
  if (name === "Select Box") {
    content = [...Array(parseInt(count))].map((value, index) => {
      return (
        <div className="selectbox-item" key={index}>
          <label contentEditable suppressContentEditableWarning>
            Enter your label
          </label>
          <p>:</p>
          <input type="checkbox" key={index} className="checkbox" />
        </div>
      );
    });
  }

  const { deleteItem, swapItem } = useContext(DeleteStore);

  return (
    <motion.div
      className="item-wrapper"
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
      initial={{ x: -30 }}
      animate={{ x: 0 }}
      exit={{ x: -100, opacity: 0 }}
      layout
    >
      <div className="label-wrapper">
        {hovering && (
          <div className="arrows-updown">
            <motion.div
              className="arrow-wrapper"
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1, scale: 1.02, cursor: "pointer" }}
              onClick={() => swapItem("Up", id)}
            >
              <FaArrowUp />
            </motion.div>
            <motion.div
              className="arrow-wrapper"
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1, scale: 1.02, cursor: "pointer" }}
              onClick={() => swapItem("Down", id)}
            >
              <FaArrowDown />
            </motion.div>
          </div>
         )}
        <label contentEditable suppressContentEditableWarning>
          Enter your label
        </label>
      </div>
      <div className="colon-wrapper">
        <p>:</p>
      </div>
      <div className="element-wrapper">{content}</div>
      {hovering && (
        <motion.div
          whileHover={{ cursor: "pointer", scale: 1.2 }}
          style={{ marginLeft: "2%" }}
        >
          <MdDelete onClick={() => deleteItem(id)} />
        </motion.div>
      )}
    </motion.div>
  );
}
