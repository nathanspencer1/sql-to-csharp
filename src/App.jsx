import { useState } from "react";
import "./App.css";
import "./css/tab.css";
import "./css/button-green.css";
import CSharpClass from "./components/CSharpClass.tsx";
import ImportClipboardButton from "./components/ImportClipboardButton.tsx";
import TableInfoGrid from "./components/TableInfoGrid.tsx";
import DataTransferClass from "./components/DataTransferClass.tsx";

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
        <div className="column33">
          <div className="row">
            <div className="column50">
              <ImportClipboardButton onImport={handleClipboardImport} />
            </div>
            <div className="column50">
              <button className="button-green"
                onClick={() =>
                  alert(
                    "In SSMS highlight a table name and press Alt+F1 to get the table info.\nCopy the table info into your clipboard and click the 'Import Clipboard' button."
                  )
                }>
                ?
              </button>
            </div>
          </div>
          <TableInfoGrid rows={rows} onRowsChange={handleRowsChange} />
        </div>
        <div className="column33">
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
        <div className="column33" />
      </div>
    </div>
  );
}

export default App;
