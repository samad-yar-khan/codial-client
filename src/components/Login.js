import React from 'react';
import {clearAuthState, login} from '../actions/auth'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'

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

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
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
    if(email && password){
      this.props.dispatch(login(email , password));
    }


    this.setState({
        email:'',
        password:'',
    })
  };

  render() {

    const {  error, inProggress , isLoggedIn} = this.props.auth;

    if(isLoggedIn){
      return <Redirect to='/'/>
    }

    return (
      <form method="post" action="#" className="login-form">
        <div className="login-signup-header">Login</div>
        {error && <div className='alert error-dailog'>{error}</div> }
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
          <button onClick={this.handleFormSubmit} disabled={inProggress}>{inProggress ? 'Logging In....' : 'Login'}</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state){
  return {
    auth : state.auth
  }
} 

const ConnectedLoginComponent=connect(mapStateToProps)(Login); //we need to conecct it to strore to use dipatth

export default ConnectedLoginComponent;
