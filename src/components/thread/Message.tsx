import React, { ReactChildren, ReactChild } from "react";

interface PropTypes {
  children: ReactChildren | ReactChild;
  id?: string,
}

const Message = ({ children, id}: PropTypes) => (
  <p id={id} className="message">{children}</p>
);

export default Message;
