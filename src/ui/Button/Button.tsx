import React from "react";

type PropsButton = {
  text: string;
  clickButton: () => void;
  buttonStyle: string;
  type: "submit" | "button";
};

const Button: React.FC<Partial<PropsButton>> = ({
  text,
  clickButton,
  buttonStyle,
  type,
}) => {
  
  return (
    <button
      className={buttonStyle}
      onClick={clickButton}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;