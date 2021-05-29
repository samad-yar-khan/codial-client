import React from 'react';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();

    }

    handleFormSubmit=(e)=>{
        e.preventDefault();

        console.log("email" , this.emailInputRef);
        console.log("pass" , this.passwordInputRef);

    }

  render() {
    return (
      <form method="post" action="#" className="login-form">
        <div className="login-signup-header">Login</div>
        <div className="field">
          <input type="email" placeholder="Email" required ref={this.emailInputRef}/>
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required ref={this.passwordInputRef}/>
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
