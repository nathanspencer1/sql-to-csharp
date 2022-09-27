import React, { FunctionComponent } from "react";
import { TableProps } from "../interfaces/TableProps";
import GetCSharpType from "../lookup/TypeMap.jsx";

interface DataTransferClassProps {
  members: TableProps[];
}

const DataTransferClass: FunctionComponent<DataTransferClassProps> = ({ members }): JSX.Element => {
  const selectAllText = (e) => {
    e.target.select();
  };
  let classText = `public class SqlDto\n{\n${members?.map((m) => `\t${m.public ? "public" : "private"} ${GetCSharpType(m.type, m.nullable)} ${m.columnName.replace(" ", "_")}${m.property ? " { get; set; }" : ";"}`).join("\n")}\n\n\tpublic Entity ToEntity() => new()\n\t{\n${members?.map(m => `\t\t${m.altName} = ${m.columnName.replace(" ", "_")}`).join(',\n')}\n\t};\n}`;
  const maxRows = 40;
  const rows = Math.min(maxRows, classText.split("\n").length);
  return (
    <div>
      <textarea rows={rows} cols={84} value={classText} readOnly={true} onFocus={selectAllText} />
    </div>
  );
};

export default DataTransferClass;
