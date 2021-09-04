import React from "react";

const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          margin: "25px",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        Modal1
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
