import React, { FunctionComponent } from "react";
import "../css/button-3.css";
import { TableProps } from "../interfaces/TableProps";

interface ImportClipboardButtonProps {
  onImport: (rows: TableProps[]) => void;
}

const ImportClipboardButton: FunctionComponent<ImportClipboardButtonProps> = ({ onImport }): JSX.Element => {
  const handleClipboardImport = async () => {
    const text = await navigator.clipboard.readText();
    const tRows = text?.split(/\r?\n/);

    const newRows = tRows.map((r, index) => {
      const cells = r.split("\t");
      console.log(cells[6], `'${cells[6]}'`, cells[6] === "yes");
      return {
        id: index,
        columnName: cells[0],
        type: cells[1],
        computed: cells[2],
        length: Number(cells[3]),
        prec: Number(cells[4]),
        scale: Number(cells[5]),
        nullable: cells[6] === "yes",
        altName: cells[0],
        public: true,
        property: true,
      };
    });
    onImport(newRows);
  };

  return (
    <div>
      <button id="button-3" className="button-3" onClick={handleClipboardImport}>
        Import Clipboard
      </button>
    </div>
  );
};

export default ImportClipboardButton;
