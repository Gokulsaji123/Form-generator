import "./App.css";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import { useState } from "react";
import { DeleteStore } from "./store";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  function addItem({ event, count }) {
    let id = Math.random();
    setSelectedItems((prev) => [
      ...prev,
      { name: event.target.firstChild.data, count, id },
    ]);
  }

  function deleteItem(id) {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  }

  function swapItem(direction, id) {
    let index = selectedItems.findIndex((item) => item.id === id);
    if (direction === "Up") {
      if (index === 0) return;
      let tempArr = [...selectedItems];
      let temp = tempArr[index];
      tempArr[index] = tempArr[index - 1];
      tempArr[index - 1] = temp;
      setSelectedItems(tempArr);
    }
    if (direction === "Down") {
      if (index === selectedItems.length - 1) return;
      let tempArr = [...selectedItems];
      let temp = tempArr[index];
      tempArr[index] = tempArr[index + 1];
      tempArr[index +  1] = temp;
      setSelectedItems(tempArr);
    }
  }

  const ctxvalue = { deleteItem, swapItem };

  return (
    <div className="main-container">
      <Sidebar addItem={addItem} />
      <DeleteStore.Provider value={ctxvalue}>
        <div className="fullpage-container">
          <Page selectedItems={selectedItems} />
        </div>
      </DeleteStore.Provider>
    </div>
  );
}

export default App;
