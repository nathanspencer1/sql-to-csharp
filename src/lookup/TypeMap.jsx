const TypeMap = {
  BIT: "bool",
  TINYINT: "byte",
  SMALLINT: "short",
  INT: "int",
  BIGINT: "long",
  CHAR: "string",
  VARCHAR: "string",
  VARBINARY: "byte[]",
  DATE: "DateTime",
  DATETIME: "DateTime",
  DECIMAL: "decimal",
  NUMERIC: "decimal",
  REAL: "float",
  FLOAT: "float",
};

const GetCSharpType = (sqlType, nullable, nullableReferenceTypes) => {
  let cSharpType = TypeMap[sqlType.toUpperCase()];
  if (nullable && (nullableReferenceTypes || (cSharpType !== "string" && cSharpType !== "byte[]"))) cSharpType += "?";
  return cSharpType;
};

const ConstructProperty = (m, name, nullableReferenceTypes) => {
  let line = '\t';
          line += (m.public ? "public" : "private") + " ";
          const cSharpType = GetCSharpType(m.type, m.nullable, nullableReferenceTypes);
          line += cSharpType + " " + name.replace(/ /g, "_");
          if (nullableReferenceTypes && cSharpType === 'string') {
            if (m.property) line += " { get; set; }";
            line += ' = "";';
          } else line += `${m.property ? " { get; set; }" : ";"}`;
          return line;
}

export default ConstructProperty;
