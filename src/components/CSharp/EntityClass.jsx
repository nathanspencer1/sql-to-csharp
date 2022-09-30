import React from "react";
import GetCSharpType from "../../lookup/TypeMap.jsx";
import BaseClass from "./BaseClass";

const EntityClass = ({ members }) => {
  const converter = (members) =>
    `public class Entity\n{\n${members
      ?.map((m) => `\t${m.public ? "public" : "private"} ${GetCSharpType(m.type, m.nullable)} ${m.altName}${m.property ? " { get; set; }" : ";"}`)
      .join("\n")}\n}`;
  return <BaseClass members={members} converter={converter} />;
};

export default EntityClass;
