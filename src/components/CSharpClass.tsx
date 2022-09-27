import React, { FunctionComponent } from "react";

interface CSharpClassProps {
  members: any[];
}

const CSharpClass: FunctionComponent<CSharpClassProps> = ({ members }): JSX.Element => {
  const classText = `public class Class1\n{\n${members?.map((m) => `\tpublic int ${m.altName};`).join("\n")}\n}`;
  const maxRows = 40;
  const rows = Math.min(maxRows, classText.split("\n").length);
  return (
    <div>
      <textarea rows={rows} cols={100} value={classText} />
    </div>
  );
};

export default CSharpClass;
