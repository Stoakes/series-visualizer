import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Button } from 'react-bootstrap';

import { TextareaInput } from './TextareaInput.js';

let AddSerie = props => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Row>
                <Col md={4} sm={4} xs={12}>
                    <Field
                        name="serieA"
                        id="serieA"
                        component={TextareaInput}
                        label="Serie A"
                        placeholder="A Json serie"
                        rows={12}
                    />
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <Field
                        name="serieB"
                        id="serieB"
                        component={TextareaInput}
                        label="Serie B"
                        placeholder="A second Json serie"
                        rows={12}
                    />
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <label>Example</label>
                    <pre>
                        {JSON.stringify(
                            {
                                name: 'fuel',
                                data: [
                                    { timestamp: 1537592706, value: 10 },
                                    { timestamp: 1538592706, value: 20 },
                                ],
                            },
                            null,
                            2
                        )}
                    </pre>
                </Col>
            </Row>
            <br />
            <Button bsStyle="success" className="btn-fill" type="submit">
                Update Series
            </Button>
        </form>
    );
};

AddSerie.propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default reduxForm({ form: 'addSerie' })(AddSerie);
