import React from "react";
import ConstructProperty from "../../lookup/TypeMap.jsx";
import BaseClass from "./BaseClass";

const EntityClass = ({ members, nullableReferenceTypes }) => {
  const converter = (members) =>
    `public class Entity\n{\n${members
      ?.map((m) => ConstructProperty(m, m.altName, nullableReferenceTypes))
      .join("\n")}\n}`;
  return <BaseClass members={members} converter={converter} />;
};

export default EntityClass;
