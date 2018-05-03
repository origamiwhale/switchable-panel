import { connect } from "react-redux";
import { changeName, changeSurname } from "../../actions";

import Edit from './Edit';

function mapStateToProps(state) {
  return {
    name: state.name,
    surname: state.surname
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: newName => dispatch(changeName(newName)),
    onSurnameChange: newSurname => dispatch(changeSurname(newSurname))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
