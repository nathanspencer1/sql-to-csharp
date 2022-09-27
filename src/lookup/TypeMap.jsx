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

const GetCSharpType = (sqlType, nullable) => {
  let cSharpType = TypeMap[sqlType.toUpperCase()];
  if (nullable && cSharpType !== "string" && cSharpType !== "byte[]")
    cSharpType += "?";
  return cSharpType;
}

export default GetCSharpType;
