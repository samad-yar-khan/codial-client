import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
      confirmedPassword: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirmedPassword: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password , confirmedPassword} = this.state;
    console.log('email', email);
    console.log('pass', password);
    console.log('c-pass', confirmedPassword);

    // console.log("email" , this.emailInputRef);
    // console.log("pass" , this.passwordInputRef);
    this.setState({
      email:'',
      password:'',
      confirmedPassword:''
    })
  };

  render() {
    return (
      <form method="post" action="#" className="login-form">
        <div className="login-signup-header">Register</div>
        <div className="field">
          <input 
            type="email" 
            placeholder="Email" 
            onChange={this.handleEmailChange}
            required 
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input 
            type="password" 
            placeholder="Password" 
            onChange={this.handlePasswordChange}
            required 
            value={this.state.password}
          />
        </div>
        <div className="field">
          <input 
            type="password" 
            placeholder="Confirm Password" 
            onChange={this.handleConfirmPasswordChange}
            required 
            value={this.state.confirmedPassword}
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Register</button>
        </div>
      </form>
    );
  }
}

export default Register;