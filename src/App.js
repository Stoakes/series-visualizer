import React, { Component } from 'react';
import AddSerie from './forms/AddSerie';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Row>
                    <Col md={12}>
                        <AddSerie
                            onSubmit={values => {
                                this.props.addSerie(values);
                            }}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
