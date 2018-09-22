import { connect } from 'react-redux';

import App from '../App';

function mapStateToProps(state, ownProps) {
    return {
        params: ownProps.params,
        series: state.app.series,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        /**
         * formValues: {series: ['json content', 'json content']}
         */
        updateSeries: (formValues, chartRef) => {
            // Formatting
            let seriesChart = chartRef.refs.seriesChart;
            if (seriesChart === undefined) {
                throw new 'Series chart not found'();
            }
            // Clear chart
            seriesChart.getChart().series &&
                seriesChart.getChart().series.forEach(s => s.remove());

            formValues.series.forEach((serie, index) => {
                if (serie === '') {
                    return;
                }
                try {
                    let data = JSON.parse(serie);
                    seriesChart.getChart().addSeries({
                        name: data.name,
                        data: data.data.map(obj => [
                            obj.timestamp * 1000,
                            obj.value,
                        ]),
                    });
                } catch (error) {
                    alert(`Invalid JSON for Serie ${index}`);
                }
            });
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
