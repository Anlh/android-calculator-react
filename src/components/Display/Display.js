import React from 'react';

import classes from './Display.css';

const display = (props) => {
    return (
        <div className={classes.Display}>
            {props.children}
        </div>
    )
};

export default display;