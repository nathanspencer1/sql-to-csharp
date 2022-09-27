import React, { FunctionComponent } from "react";

interface tableProps {
  id: number;
  columnName: string;
  type: string;
  computed: string;
  length: number;
  prec: number;
  scale: number;
  nullable: string;
  altName: string;
}

interface TableInfoGridProps {
  rows: tableProps[];
  onRowsChange: (newRows: tableProps[]) => void;
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
    { field: "nullable", headerName: "Nullable" },
    { field: "altName", headerName: "C# Name", input: true },
  ];

  const handleNameChange = ({ target }) => {
    const newRows = rows.map((r) => ({ ...r }));
    const coordinates = target.id.split("-");
    newRows[Number(coordinates[0])].altName = target.value;
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
                    {c.input ? <input type="text" value={r[c.field]} onChange={handleNameChange} id={r_index + "-" + c_index}></input> : r[c.field]}
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
