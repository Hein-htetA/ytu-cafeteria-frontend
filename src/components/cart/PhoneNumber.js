import React from "react";
import "./PhoneNumber.css";

const PhoneNumber = ({ phone, onChangeInput }) => {
  return (
    <div className="ph-no-container">
      <input value={"+95"} readOnly className="ph-no-prefix" />
      <input
        type={"number"}
        value={phone}
        name="phone"
        className="ph-no-input"
        placeholder="9xxxxxxxxx"
        onChange={onChangeInput}
      />
    </div>
  );
};

export default PhoneNumber;
