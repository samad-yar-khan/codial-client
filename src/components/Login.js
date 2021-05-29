import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form method="post" action="#" className="login-form">
        <div className="login-signup-header">Login</div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <button>Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
