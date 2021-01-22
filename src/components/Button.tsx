import React, { ReactChildren, ReactChild, MouseEvent } from "react";

interface PropTypes {
  onClick: (event: MouseEvent) => void;
  children: ReactChildren | ReactChild;
  ariaDescribedBy?: string;
}

const Button = ({ onClick, children, ariaDescribedBy }: PropTypes) => {
  return (
    <button
      className={"button-primary"}
      onClick={onClick}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </button>
  );
};

export default Button;
