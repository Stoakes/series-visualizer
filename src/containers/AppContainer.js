import { connect } from 'react-redux';

import App from '../App';
import { addSerie } from '../actions';

function mapStateToProps(state, ownProps) {
    return {
        params: ownProps.params,
        series: state.app.series,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addSerie: formValues => {
            console.log(formValues);
            // Formatting

            // Store in app state
            dispatch(addSerie(formValues));
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
