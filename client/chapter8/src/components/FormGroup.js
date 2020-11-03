import React from 'react';

const FormGroup = (props) => {

    const setValue = (e) => {
        props.doUpdate(e.target.value);
    }

    return (
        <div className="form-group">
            <label>{props.title}</label>
            <input type="text" className="form-control" value={props.value} onBlur={setValue} />
        </div>
    )
}

export default FormGroup;