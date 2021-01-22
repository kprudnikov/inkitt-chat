import React, { ReactChildren, ReactChild } from "react";
import './Paper.css'

interface PropTypes {
    children: ReactChildren | ReactChild;
}

const Paper = ({ children }: PropTypes) => {
    return <div className="paper">{children}</div>
};

export default Paper;
