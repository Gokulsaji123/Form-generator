import "./App.css";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import { useState } from "react";
import ExportButton from "./components/ExportButton";
import CreatePDFfromHTML from "./util";
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

  const ctxvalue = { deleteItem };

  return (
    <div className="main-container">
      <Sidebar addItem={addItem} />
      <DeleteStore.Provider value={ctxvalue}>
        <Page selectedItems={selectedItems} />
      </DeleteStore.Provider>
      <ExportButton CreatePDFfromHTML={CreatePDFfromHTML} />
    </div>
  );
}

export default App;
