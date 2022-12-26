import React from "react";

const ValueInput = ({ name, onChangeInput }) => {
  return (
    <div className="ph-no-container">
      <input
        value={name}
        style={{ border: "none", fontSize: "1rem" }}
        name="name"
        placeholder="Enter Your Name"
        onChange={onChangeInput}
      />
    </div>
  );
};

export default ValueInput;
