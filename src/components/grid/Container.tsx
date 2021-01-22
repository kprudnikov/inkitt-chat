import React, { ReactChildren, ReactChild } from "react";
import './Container.css';

interface PropTypes {
    children: ReactChildren | ReactChild;
}

const Container = ({ children }: PropTypes) => {
    return <div className="container">{children}</div>
};

export default Container;
