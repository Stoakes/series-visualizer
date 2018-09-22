import React, { Component } from 'react';
import AddSerie from './forms/AddSerie';
import { Row, Col } from 'react-bootstrap';
import { SeriesChart } from './components/SeriesChart';

class App extends Component {
    render() {
        return (
            <div style={{ marginLeft: '25px', marginRight: '25px' }}>
                <Row>
                    <Col md={12}>
                        <header className="App-header">
                            <h1 className="App-title">
                                Basic series visualizer
                            </h1>
                        </header>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <AddSerie
                            onSubmit={values => {
                                this.props.updateSeries(
                                    values,
                                    // eslint-disable-next-line
                  this.refs.seriesChart
                                );
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <SeriesChart ref="seriesChart" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
