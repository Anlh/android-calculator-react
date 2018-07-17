import React from 'react';
import classes from './InputArea.css'

const inputArea = (props) => (
    <div className={classes.InputArea}>
        <input
            onBlur={event => event.target.focus()}
            autoFocus={true}
            type="text"
            value={props.value}/>
    </div>
);


export default inputArea;