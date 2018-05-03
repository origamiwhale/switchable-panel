import { connect } from 'react-redux';

import View from './View';

function mapStateToProps(state) {
    return {
        name: state.name,
        surname: state.surname,
    }
}

export default connect(mapStateToProps)(View);