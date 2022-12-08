import React, { FunctionComponent } from "react";
import "../css/NRTcheckbox.css";

interface NullableReferenceTypeCheckBoxProps {
  checked: boolean;
  setChecked: (isChecked: boolean) => void;
}
const NullableReferenceTypeCheckBox: FunctionComponent<NullableReferenceTypeCheckBoxProps> = ({ checked, setChecked }): JSX.Element => {
  return (
    <div className="NullableReferenceType">
      Nullable Reference Types
      <input type="checkbox" checked={checked} onChange={({ target }) => setChecked(target.checked)} />
    </div>
  );
};

export default NullableReferenceTypeCheckBox;
