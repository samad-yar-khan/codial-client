import React from 'react';
import { connect } from 'react-redux';
import { clearProfileState, fetchUserProfile } from '../actions/profile';
import {Loader} from './index'



class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFriend:false
    };
  }

  componentDidMount() {
    const {match } = this.props;
    

    if(match.params.userId){
        // console.log(match.params.userId);
        this.props.dispatch(fetchUserProfile((match.params.userId)));
    }
    this.checkIfUserIsAFriend();

  }

  

  componentWillUnmount() {
      this.props.dispatch(clearProfileState());
  }
  
  checkIfUserIsAFriend(){

    const {match , friends} = this.props;

    if(match.params.userId){
      let index = friends.friendList.map((friend)=>friend.to_user._id).indexOf(match.params.userId);

      if(index!==-1){
        this.setState({
          isFriend : true
        })
      }
    }

  }
  
  handleChange = (feildName , value) => {
    this.setState({
        [feildName] : value
    })
  };

  handleAddFriend = () => {
    this.setState({
        isFriend : true
    })
  }


  handleRemoveFriend = ()=>{
    this.setState({
        isFriend : false
    })
  }


  render() {
    // const { error } = this.props.auth;
    const {user , error ,inProgress} = this.props.profile;
    const { isFriend } = this.state;
    
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
          {!isFriend ? (
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
    profile : state.profile,
    friends : state.friends
  };
};

const ConnectedProfileComponent = connect(mapStateToProps)(UserProfile);

export default ConnectedProfileComponent;
