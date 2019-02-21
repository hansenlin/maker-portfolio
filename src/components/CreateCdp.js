import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { openCdpAsync } from '../actions';

class CreateCdp extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div>{error}</div>;
    }
  }

  renderInput = ({ input, lable, meta }) => {
    return (
      <div>
        <input {...input} autoComplete="off" placeholder={lable} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.openCdpAsync(formValues);
  }

  render(){
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="amount" component={this.renderInput} lable="amount to lock" />
          <button>create cdp</button>
        </form>
    );
  }

}

const validate = formValues => {
  const errors = {};
  if (!formValues.amount) {
    errors.name = "amount required";
    return errors;
  }
}

const formWrapped = reduxForm({
  form: 'openCDP',
  validate
})(CreateCdp);

export default connect(null, { openCdpAsync })(formWrapped);