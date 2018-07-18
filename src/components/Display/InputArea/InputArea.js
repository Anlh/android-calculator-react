import React from 'react';
import classes from './InputArea.css'

const inputArea = (props) => (
    <div className={classes.InputArea}>
        <input
            // onBlur={event => event.target.focus()}
            // autoFocus={true}
            readOnly
            type="text"
            value={props.val}/>
    </div>
);


export default inputArea;