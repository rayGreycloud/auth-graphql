import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';

class SignupForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <h3>Sign Up</h3>;
      <AuthForm
        errors={[]}
        onSubmit={this.onSubmit.bind(this)}
      />
    );
  }
}

export default graphql(mutation)(SignupForm);
