import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <form method="post" action="#" className="login-form">
        <div className="login-signup-header">Register</div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <div className="field">
          <button>Register</button>
        </div>
      </form>
    );
  }
}

export default Register;
