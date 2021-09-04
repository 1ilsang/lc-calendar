import React from "react";

const Navigation = (props) => {
  const { onNavClick } = props;

  return (
    <div>
      <button onClick={() => onNavClick("record")}>기록하기</button>
      <button onClick={() => onNavClick("detail")}>내역</button>
    </div>
  );
};

export default Navigation;
