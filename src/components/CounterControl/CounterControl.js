import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <>
        {/* {console.log(props)} */}
        <div className="CounterControl" onClick={props.clicked}>
            {props.label}
        </div>
    </>
);

export default counterControl;