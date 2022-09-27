import React, { FunctionComponent } from "react";
import { TableProps } from "../interfaces/TableProps";

interface TableInfoGridProps {
  rows: TableProps[];
  onRowsChange: (newRows: TableProps[]) => void;
}

const TableInfoGrid: FunctionComponent<TableInfoGridProps> = ({ rows, onRowsChange }): JSX.Element => {
  const columns = [
    // { field: "id", headerName: "Id", hide: true },
    { field: "columnName", headerName: "Column Name" },
    { field: "type", headerName: "Type" },
    { field: "computed", headerName: "Computed" },
    { field: "length", headerName: "Length" },
    { field: "prec", headerName: "Prec" },
    { field: "scale", headerName: "Scale" },
    { field: "nullable", headerName: "Nullable", type: "checkbox" },
    { field: "altName", headerName: "C# Name", type: "text" },
    { field: "public", headerName: "Pub.", type: "checkbox" },
    { field: "property", headerName: "G/S", type: "checkbox" },
  ];

  const handleRowChange = ({ target }) => {
    const newRows = rows.map((r) => ({ ...r }));
    const coordinates = target.id.split("-");
    const column = columns[Number(coordinates[1])];
    newRows[Number(coordinates[0])][column.field] = target.type === "checkbox" ? target.checked : target.value;
    onRowsChange(newRows);
  };

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              {columns?.map((c, index) => (
                <th key={index}>{c.headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((r, r_index) => (
              <tr key={r_index}>
                {columns?.map((c, c_index) => (
                  <td key={c_index}>
                    {c.type ? <input type={c.type} value={r[c.field]} checked={r[c.field]} onChange={handleRowChange} id={r_index + "-" + c_index}></input> : r[c.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableInfoGrid;
