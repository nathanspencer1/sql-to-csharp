import React from "react";
import GetCSharpType from "../../lookup/TypeMap.jsx";
import BaseClass from "./BaseClass";

const DataTransferClass = ({ members }) => {
  const converter = (members) =>
    `public class SqlDto\n{\n${members
      ?.map(
        (m) =>
          `\t${m.public ? "public" : "private"} ${GetCSharpType(m.type, m.nullable)} ${m.columnName.replace(" ", "_")}${
            m.property ? " { get; set; }" : ";"
          }`
      )
      .join("\n")}\n\n\tpublic Entity ToEntity() => new()\n\t{\n${members
      ?.map((m) => `\t\t${m.altName} = ${m.columnName.replace(" ", "_")}`)
      .join(",\n")}\n\t};\n}`;
  return <BaseClass members={members} converter={converter} />;
};

export default DataTransferClass;
