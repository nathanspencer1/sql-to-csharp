import React, { FunctionComponent } from "react";

const HelpButton: FunctionComponent = (): JSX.Element => {
  return (
    <button
      className="button-green"
      onClick={() =>
        alert(
          "In SSMS highlight a table name and press Alt+F1 to get the table info.\nCopy the table info into your clipboard and click the 'Import Clipboard' button."
        )
      }>
      ?
    </button>
  );
};

export default HelpButton;
