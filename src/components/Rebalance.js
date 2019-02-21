import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { rebalanceAsync } from '../actions';

class Rebalance extends Component {
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
    this.props.rebalanceAsync(formValues);
  }

  render(){
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="amount" component={this.renderInput} lable="amount to transfer" />
          <Field name="from" component={this.renderInput} lable="transfer from" />
          <Field name="to" component={this.renderInput} lable="transfer to" />
          <button>rebalance</button>
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
  form: 'rebalance',
  validate
})(Rebalance);

export default connect(null, { rebalanceAsync })(formWrapped);