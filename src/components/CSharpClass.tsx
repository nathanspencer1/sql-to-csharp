import React, { FunctionComponent } from "react";
import { TableProps } from "../interfaces/TableProps";
import GetCSharpType from "../lookup/TypeMap.jsx";

interface CSharpClassProps {
  members: TableProps[];
}

const CSharpClass: FunctionComponent<CSharpClassProps> = ({ members }): JSX.Element => {
  const selectAllText = (e) => {
    e.target.select();
  };
  let classText = `public class Entity\n{\n${members?.map((m) => `\t${m.public ? "public" : "private"} ${GetCSharpType(m.type, m.nullable)} ${m.altName}${m.property ? " { get; set; }" : ";"}`).join("\n")}\n}`;
  const maxRows = 40;
  const rows = Math.min(maxRows, classText.split("\n").length);
  return (
    <div>
      <textarea rows={rows} cols={84} value={classText} readOnly={true} onFocus={selectAllText} />
    </div>
  );
};

export default CSharpClass;
