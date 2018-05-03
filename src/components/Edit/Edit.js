import React from 'react';

const Edit = ({name, surname, onNameChange, onSurnameChange}) => {
    return (
        <div className="edit">
            <label htmlFor="edit-name">Name</label>
            <input type="text" id="edit-name" value={name} onChange={ e => onNameChange(e.target.value)}/>
            <label htmlFor="edit-surname">Surname</label>
            <input type="text" id="edit-surname" value={surname} onChange={ e => onSurnameChange(e.target.value)}/>
        </div>
    );
}
 
export default Edit;