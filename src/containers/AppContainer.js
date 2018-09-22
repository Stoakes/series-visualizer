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
        updateSeries: (formValues, chartRef) => {
            console.log(formValues, chartRef);
            // Formatting
            let seriesChart = chartRef.refs.seriesChart;
            if (seriesChart === undefined) {
                throw new 'Series chart not found'();
            }
            // Clear chart
            seriesChart.getChart().series &&
                seriesChart.getChart().series.forEach(s => s.remove());

            try {
                let serieA = JSON.parse(formValues.serieA);
                seriesChart.getChart().addSeries({
                    name: serieA.name,
                    data: serieA.data.map(obj => [
                        obj.timestamp * 1000,
                        obj.value,
                    ]),
                });
            } catch (error) {
                alert('Invalid JSON for Serie A');
            }
            try {
                let serieB = JSON.parse(formValues.serieB);
                seriesChart.getChart().addSeries({
                    name: serieB.name,
                    data: [
                        serieB.data.map(obj => [
                            obj.timestamp * 1000,
                            obj.value,
                        ]),
                    ],
                });
            } catch (error) {
                alert('Invalid JSON for Serie B');
            }
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
