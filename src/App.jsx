import { useState } from "react";
import "./App.css";
import "./css/tab.css";
import "./css/button-green.css";
import CSharpClass from "./components/CSharp/EntityClass";
import ImportClipboardButton from "./components/ImportClipboardButton.tsx";
import TableInfoGrid from "./components/TableInfoGrid.tsx";
import DataTransferClass from "./components/CSharp/DataTransferClass";
import HelpButton from "./components/HelpButton.tsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("Entity");
  const [rows, setRows] = useState([
    {
      id: 0,
      columnName: "HMY",
      type: "INT",
      computed: "No",
      length: 9,
      prec: 0,
      scale: 8,
      nullable: false,
      altName: "Id",
      public: true,
      property: true,
    },
  ]);
  const handleClipboardImport = (newRows) => {
    setRows(newRows);
  };
  const handleRowsChange = (newRows) => setRows(newRows);
  const Tabs = ["Entity", "DTO"];

  return (
    <div className="App">
      <div className="row">
        <div className="column50">
          <div className="row">
            <a href="https://github.com/nathanspencer1/sql-to-csharp" target={"blank"}>
              <i class="fa fa-github" />
            </a>
            <HelpButton />
            <ImportClipboardButton onImport={handleClipboardImport} />
          </div>
          <TableInfoGrid rows={rows} onRowsChange={handleRowsChange} />
        </div>
        <div className="column50">
          <div className="tab">
            {Tabs.map((tab) => (
              <button className={`tabLinks${selectedTab === tab ? " active" : ""}`} onClick={() => setSelectedTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
          {
            {
              Entity: <CSharpClass members={rows} />,
              DTO: <DataTransferClass members={rows} />,
              default: <h1>Error</h1>,
            }[selectedTab]
          }
        </div>
      </div>
    </div>
  );
}

export default App;
