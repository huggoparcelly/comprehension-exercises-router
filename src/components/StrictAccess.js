import React, { Component } from 'react';
import { Redirect } from 'react-router';


class StrictAccess extends Component {
  render () {
    const { username, password } = this.props.user;
    if (!(username === 'joao' && password === '1234')) {
      alert('Accesse denied')
      return <Redirect to="/" />
    }
    return (
      <p>Welcome, joao!</p>
    );
  }
}

export default StrictAccess;
