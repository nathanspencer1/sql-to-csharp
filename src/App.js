import { useState } from "react";
import "./App.css";
import CSharpClass from "./components/CSharpClass.tsx";
import ImportClipboardButton from "./components/ImportClipboardButton.tsx";
import TableInfoGrid from "./components/TableInfoGrid.tsx";

function App() {
  //const [importedClipboard, setImportedClipboard] = useState("");
  const [rows, setRows] = useState([
    {
      id: 0,
      columnName: "HMY",
      type: "INT",
      computed: "No",
      length: 9,
      prec: 0,
      scale: 8,
      nullable: "No",
      altName: "Id",
    },
  ]);
  const handleClipboardImport = (importedClipboard) => {
    const tRows = importedClipboard?.split("\n");

    const newRows = tRows.map((r, index) => {
      const cells = r.split("\t");
      return {
        id: index,
        columnName: cells[0],
        type: cells[1],
        computed: cells[2],
        length: Number(cells[3]),
        prec: Number(cells[4]),
        scale: Number(cells[5]),
        nullable: cells[6],
        altName: cells[0],
      };
    });
    setRows(newRows);
  }
  const handleRowsChange = (newRows) => setRows(newRows);

  return (
    <div className="App">
      <h1>Sql to C#</h1>
      <div className="row">
        <div className="column">
          <ImportClipboardButton onImport={handleClipboardImport} />
          <TableInfoGrid rows={rows} onRowsChange={handleRowsChange} />
        </div>
        <div className="column">
          <CSharpClass members={rows} />
        </div>
      </div>
    </div>
  );
}

export default App;
