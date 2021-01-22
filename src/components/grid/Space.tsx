import React, { ReactChildren, ReactChild } from "react";
import './Space.css'

interface PropTypes {
    children: ReactChildren | ReactChild;
}

const Space = ({ children }: PropTypes) => {
    return <div className="space">{children}</div>
};

export default Space;
