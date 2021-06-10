import React from 'react';
import { connect } from 'react-redux';
import { clearProfileState, fetchUserProfile } from '../actions/profile';
import {Loader} from './index'



class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friend:false
    };
  }

  componentDidMount() {
    const {match} = this.props;

    if(match.params.userId){
        // console.log(match.params.userId);
        this.props.dispatch(fetchUserProfile((match.params.userId)));
    }

  }
  

  componentWillUnmount() {
      this.props.dispatch(clearProfileState());
  }
  
  
  handleChange = (feildName , value) => {
    this.setState({
        [feildName] : value
    })
  };

  handleAddFriend = () => {
    this.setState({
        friend : true
    })
  }


  handleRemoveFriend = ()=>{
    this.setState({
        friend : false
    })
  }


  render() {
    // const { error } = this.props.auth;
    const {user , error ,inProgress} = this.props.profile;
    const { friend } = this.state;
    
    // const {match : {params} } = this.props;
    // console.log(params);

    if(inProgress){
        return (<Loader />)
    }

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dailog">{error}</div>}
        {/* {error === false && <div className="alert success-dailog">Succesfuly Added Friend !</div>} */}
        
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        
        </div>

        
        <div className="btn-grp">
          {!friend ? (
            <button className="button save-btn" onClick={this.handleAddFriend}>Add Friend</button>
          ) : (
            <button className="button edit-btn" onClick={this.handleRemoveFriend}>Remove Friend</button>
          )}
        </div>

        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    profile : state.profile
  };
};

const ConnectedProfileComponent = connect(mapStateToProps)(UserProfile);

export default ConnectedProfileComponent;
