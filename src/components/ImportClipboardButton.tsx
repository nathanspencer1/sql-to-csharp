import React, { FunctionComponent } from "react";
import "../css/button-green.css";
import { TableProps } from "../interfaces/TableProps";

interface ImportClipboardButtonProps {
  onImport: (rows: TableProps[]) => void;
}

const ImportClipboardButton: FunctionComponent<ImportClipboardButtonProps> = ({ onImport }): JSX.Element => {
  const handleClipboardImport = async () => {
    const text = await navigator.clipboard.readText();
    const tRows = text?.split(/\r?\n/);

    if (tRows[0].split("\t").length < 6) {
      alert("Invalid table format.");
      return;
    }

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
        nullable: cells[6] === "yes",
        altName: cells[0]
          .replace(/[Hh][Mm][Yy]/g, "Id")
          .replace(/^[bs]/g, "")
          .replace(" ", "_"),
        public: true,
        property: true,
      };
    });
    onImport(newRows);
  };

  return (
    <div>
      <button className="button-green" onClick={handleClipboardImport}>
        Import Clipboard
      </button>
    </div>
  );
};

export default ImportClipboardButton;
