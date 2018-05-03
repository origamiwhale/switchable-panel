import React, { Component } from "react";
import { connect } from "react-redux";

import { savePristine, revertPristine } from "../../actions";

import Panel from "./Panel";
import View from "../View";
import Edit from "../Edit";

function mapDispatchToProps(dispatch) {
  return {
    savePristine: () => dispatch(savePristine()),
    revertPristine: () => dispatch(revertPristine())
  };
}

class PanelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditMode: false };
  }
  handleEdit = () => {
    const { savePristine } = this.props;
    savePristine();
    this.setState({ isEditMode: true });
  };
  handleSave = () => {
    const { state } = this.props;
    console.log(state);
    this.setState({ isEditMode: false });
  };
  handleCancel = () => {
    const { revertPristine } = this.props;
    revertPristine();
    this.setState({ isEditMode: false });
  };
  render() {
    const { isEditMode } = this.state;

    return (
      <Panel
        header={"Switchable Panel"}
        viewComp={<View />}
        editComp={<Edit />}
        isEditMode={isEditMode}
        onEdit={this.handleEdit}
        onSave={this.handleSave}
        onCancel={this.handleCancel}
      />
    );
  }
}

export default connect(state => {
  return {state};
}, mapDispatchToProps)(PanelComponent);
