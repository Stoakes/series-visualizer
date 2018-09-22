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
                        rows={7}
                    />
                </Col>
            </Row>
            <br />
            <Button bsStyle="success" className="btn-fill" type="submit">
                Add Series
            </Button>
        </form>
    );
};

AddSerie.propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default reduxForm({ form: 'addSerie' })(AddSerie);
