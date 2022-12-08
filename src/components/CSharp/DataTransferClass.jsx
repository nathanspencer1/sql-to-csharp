import React from "react";
import ConstructProperty from "../../lookup/TypeMap.jsx";
import BaseClass from "./BaseClass";

const DataTransferClass = ({ members, nullableReferenceTypes }) => {
  const converter = (members) =>
    `public class SqlDto\n{\n${members
      ?.map(
        (m) => ConstructProperty(m, m.columnName, nullableReferenceTypes)
      )
      .join("\n")}\n\n\tpublic Entity ToEntity() => new()\n\t{\n${members
      ?.map((m) => `\t\t${m.altName} = ${m.columnName.replace(/ /g, "_")}`)
      .join(",\n")}\n\t};\n}`;
  return <BaseClass members={members} converter={converter} />;
};

export default DataTransferClass;
