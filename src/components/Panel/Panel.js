import React from "react";
import PropTypes from "prop-types";

const Panel = ({
  header,
  isEditMode,
  viewComp,
  editComp,
  onEdit,
  onSave,
  onCancel
}) => {
  return (
    <div className="panel">
      <h1>{header}</h1>
      {isEditMode ? null : <button onClick={onEdit} >Edit</button>}
      {isEditMode ? editComp : viewComp}
      {isEditMode ? (
        <span>
          <button onClick={onSave} className="btn-save">Save</button>
          <button onClick={onCancel} className="btn-cancel">Cancel</button>
        </span>
      ) : null }
    </div>
  );
};

Panel.propTypes = {
  header: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  viewComp: PropTypes.element.isRequired,
  editComp: PropTypes.element.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Panel;
