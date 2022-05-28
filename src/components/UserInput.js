import React from "react";
import '../styles/userInput.css';

const UserInput = ({ value, placeholder, type, onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className="inputWrapper">
      <div>julian$</div>
      <div>julian$</div>
    </div>
  );
};

export default UserInput;