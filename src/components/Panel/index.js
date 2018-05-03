import React, { Component } from "react";
import PropTypes from 'prop-types';

import Panel from "./Panel";

class PanelComponent extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    view: PropTypes.element.isRequired,
    edit: PropTypes.element.isRequired,
    onSave: PropTypes.func,
    onEdit: PropTypes.func,
    onCancel: PropTypes.func,
  }

  static defaultProps = {
    onSave: ()=>{},
    onEdit: ()=>{},
    onCancel: ()=>{},
  }

  state = { isEditMode: false };
  
  handleEdit = () => {
    const { onEdit } = this.props;
    onEdit();
    this.setState({ isEditMode: true });
  };
  handleSave = () => {
    const { onSave } = this.props;
    onSave();
    this.setState({ isEditMode: false });
  };
  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel();
    this.setState({ isEditMode: false });
  };
  render() {
    const { isEditMode } = this.state;
    const { header, view, edit } = this.props;

    return (
      <Panel
        header={header}
        viewComp={view}
        editComp={edit}
        isEditMode={isEditMode}
        onEdit={this.handleEdit}
        onSave={this.handleSave}
        onCancel={this.handleCancel}
      />
    );
  }
}

export default PanelComponent;
