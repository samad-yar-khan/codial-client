import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange=(e)=>{
      this.setState({
          email:e.target.value
      })
  }

  handlePasswordChange=(e)=>{
    this.setState({
        password:e.target.value
    })
}

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {email ,  password} = this.state;
    console.log('email' , email );
    console.log('pass' , password)

    // console.log("email" , this.emailInputRef);
    // console.log("pass" , this.passwordInputRef);
    this.setState({
        email:'',
        password:'',
    })
  };

  render() {

    return (
      <form method="post" action="#" className="login-form">
        <div className="login-signup-header">Login</div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
