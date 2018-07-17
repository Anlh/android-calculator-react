import React from 'react'

import classes from './ButtonControl.css';

const buttonControl = (props) => {
    const styles = {};

    if (props._width) {
        styles.width = props._width;
    }

    if(props._height){
        styles.height = props._height
    }

    return (
        <div
            className={classes.ButtonControl}
            style={styles}>
            <button onClick={props.selected}>{props.val}</button>
        </div>
    );
};

export default buttonControl;