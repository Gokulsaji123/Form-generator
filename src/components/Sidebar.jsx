import React, { useRef } from "react";
import SideButton from "./SideButton";
import { motion } from "framer-motion";
import CreatePDFfromHTML from "../util";

export default function Sidebar({ addItem }) {
  const selectCount = useRef();
  function handleSelectClick(event) {
    let count = selectCount.current.value;
    if (count === "") {
      window.alert("Please enter a count");
      return;
    }
    addItem({ event, count });
  }

  return (
    <div className="sidebar-container">
      <h1>Items</h1>
      <div className="buttons-container">
        <SideButton addItem={addItem}>Input</SideButton>
        <SideButton addItem={addItem}>Text area</SideButton>
        <div className="select-container">
          <SideButton
            style={{ width: "80%" }}
            addItem={addItem}
            onClick={handleSelectClick}
          >
            Select Box
          </SideButton>
          <input
            className="input-button"
            type="number"
            id="number-input"
            placeholder="count"
            ref={selectCount}
          />
        </div>
        <motion.button
          animate={{ boxShadow: "2px 2px 5px" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "4px 4px 5px",
            transition: { ease: "easeInOut" },
          }}
          transition={{ ease: "easeInOut" }}
          className="export-button"
          onClick={CreatePDFfromHTML}
        >
          Export to pdf
        </motion.button>
      </div>
    </div>
  );
}
