import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { drawDaiAsync } from '../actions';

class WithdrawDai extends Component {
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
    this.props.drawDaiAsync(formValues);
  }

  render(){
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="amoun" component={this.renderInput} lable="amount to withdraw" />
          <Field name="cup" component={this.renderInput} lable="CDP ID" />
          <button>withdraw dai</button>
        </form>
    );
  }

}

const validate = formValues => {
  const errors = {};
  if (!formValues.amoun) {
    errors.name = "amount required";
    return errors;
  }
}

const formWrapped = reduxForm({
  form: 'withdrawDai',
  validate
})(WithdrawDai);

export default connect(null, { drawDaiAsync })(formWrapped);