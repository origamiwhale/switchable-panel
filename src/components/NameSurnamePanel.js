import React from "react";
import { connect } from "react-redux";

import Panel from "./Panel";
import NameSurnameView from "./NameSurnameView";
import NameSurnameEdit from "./NameSurnameEdit";

import { savePristine, revertPristine } from "../actions";

const NameSurnamePanel = ({ savePristine, revertPristine, name, surname }) => {
  return (
    <Panel
      header="Switchable Panel"
      view={<NameSurnameView />}
      edit={<NameSurnameEdit />}
      onEdit={() => savePristine()}
      onCancel={() => revertPristine()}
      onSave={() => {
        console.log(name, surname);
      }}
    />
  );
};

export default connect(
  state => {
    return {
      ...state
    };
  },
  dispatch => {
    return {
      savePristine: () => dispatch(savePristine()),
      revertPristine: () => dispatch(revertPristine())
    };
  }
)(NameSurnamePanel);
