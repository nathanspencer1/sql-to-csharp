import React from 'react'

const BaseClass = ({ members, converter }) => {
  const selectAllText = (e) => {
    e.target.select();
  };
    let classText = converter(members);
  const maxRows = 50;
  const rows = Math.min(maxRows, classText.split("\n").length);
  return (
    <div className="left">
      <textarea rows={rows} cols={100} value={classText} readOnly={true} onFocus={selectAllText} />
    </div>
  );
}

export default BaseClass;
