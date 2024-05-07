// Импортируем
import React from "react";

const content = (
    <div>
        <h3>Title</h3>
        <p>Some Description</p>
    </div>
)

const Component = () => (
    <div className="component">
        {content}
    </div>
)

export {Component}