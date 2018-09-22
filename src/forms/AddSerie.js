import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Row, Col, Button } from 'react-bootstrap';

import { TextareaInput } from './TextareaInput.js';

const SerieField = ({ fields }) => {
    return (
        <div>
            <Button
                bsStyle="primary"
                className="btn-fill"
                type="button"
                onClick={() => fields.push('')}
            >
                Add Serie
            </Button>
            <br />
            {fields.map((serie, index) => {
                return (
                    <Col md={4} sm={4} xs={12} key={index}>
                        <Button
                            bsStyle="danger"
                            type="button"
                            onClick={() => fields.remove(index)}
                            className="pull-right"
                        >
                            Remove
                        </Button>
                        <label>Serie {index}</label>
                        <br />
                        <Field
                            name={`${serie}`}
                            id={`${serie}`}
                            component={TextareaInput}
                            placeholder="JSON content"
                            rows={12}
                        />
                    </Col>
                );
            })}
        </div>
    );
};

let AddSerie = props => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Row>
                <FieldArray name="series" component={SerieField} />
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
                Draw Series
            </Button>
        </form>
    );
};

AddSerie.propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default reduxForm({ form: 'addSerie' })(AddSerie);
