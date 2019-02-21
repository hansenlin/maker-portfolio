import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { wipeDebtAsync } from '../actions';

class DepositDai extends Component {
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
    this.props.wipeDebtAsync(formValues);
  }

  render(){
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="amount" component={this.renderInput} lable="amount to deposit" />
          <Field name="id" component={this.renderInput} lable="CDP ID" />
          <button>deposit dai</button>
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
  form: 'withdrawDai',
  validate
})(DepositDai);

export default connect(null, { wipeDebtAsync })(formWrapped);