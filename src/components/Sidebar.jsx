import React, { useRef } from "react";
import SideButton from "./SideButton";

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
      </div>
    </div>
  );
}
