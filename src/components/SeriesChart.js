import React, { Component } from 'react';
var ReactHighcharts = require('react-highcharts');

/**
 * MemoryChart : render the chart of memory available
 */
export class SeriesChart extends Component {
    config = {
        chart: { type: 'line' },
        title: { text: 'Your series' },
        xAxis: { name: 'X', type: 'datetime' },
        series: [{ data: [] }],
        tooltip: {
            formatter: function() {
                return (
                    new Date(this.x).toLocaleString() +
                    ' --- ' +
                    this.x +
                    '<br>' +
                    this.series.name +
                    ': <b>' +
                    this.y +
                    '</b>'
                );
            },
        },
        isPureConfig: true,
    };

    render() {
        return (
            <ReactHighcharts
                config={this.config}
                // eslint-disable-next-line
        ref="seriesChart"
                isPureConfig={true}
            />
        );
    }
}
