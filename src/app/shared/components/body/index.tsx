import React from 'react';
import './body.css';
import { IBodyComponent } from '../../../core';

const Body = ({ children }: IBodyComponent) => {
    return <div className="body-container">{
        children
    }</div>
}

export default Body;
