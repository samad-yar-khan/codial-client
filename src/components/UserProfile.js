import React from 'react';
import { connect } from 'react-redux';
import { clearProfileState, fetchUserProfile } from '../actions/profile';
import { APIUrls } from '../helper/urls';
import {Loader} from './index'
import {getAuthTokenFromLocalStorage} from '../helper/utils'
import {addFriendSuccess , addFriendFailure , removeFriendSuccess , removeFriendFailure} from '../actions/friends'



class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFriend:false,
      success : null ,
      error : null,
      successMessage : ""
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

  handleAddFriend = async () => {
   
      const userId = this.props.match.params.userId;
      const Url = APIUrls.addFriend(userId);

      try {
        const options = {
          method : "POST",
          headers : {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
          }
        };
        const response = await fetch(Url , options);
        const data = await response.json();
  
        if(data.success){
          this.props.dispatch(addFriendSuccess(data.data.friendship));
          this.setState({
            success:true,
            isFriend : true,
            successMessage : "Added Friend Successfully !"
          })

        }else{
          this.props.dispatch(addFriendFailure(data.messsage));  
          this.setState({
            success : false,
            error : data.messsage
          })
        }   
      } catch (error) {
        console.error(error);
      }
     
  }


  handleRemoveFriend =async ()=>{
    const userId = this.props.match.params.userId;
    const Url = APIUrls.removeFriend(userId);

    try {
      const options = {
        method : "POST",
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
        }
      };
      const response = await fetch(Url , options);
      const data = await response.json();

      if(data.success){
        this.props.dispatch(removeFriendSuccess(userId));
        this.setState({
          success:true,
          isFriend : false,
          successMessage : "Removed Friend Successfully !"
        })
      }else{
        this.props.dispatch(removeFriendFailure(data.messsage));  
        this.setState({
          success : false,
          error : data.messsage
        })
      }   
    } catch (error) {
      console.error(error);
    }
   
  }


  render() {
    // const { error } = this.props.auth;
    const {user , error ,inProgress} = this.props.profile;
    const { isFriend , successMessage } = this.state;
    
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
        {this.state.error !== null && <div className="alert error-dailog">{error}</div>}
        {this.state.success === true && <div className="alert success-dailog">{successMessage}</div>}

        
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
