import React from 'react';
import { connect } from 'react-redux';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  handleChange = (feildName , value) => {
    this.setState({
        [feildName] : value
    })
  };

  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => {
                this.handleChange('name' , event.target.value);
              }}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div className="field-label">New Password</div>

            <input
              type="password"
              value={this.state.password}
              onChange={(event) => {
                this.handleChange('password' , event.target.value);
              }}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>

            <input
              type="password"
              value={this.state.confirmPassword}
              onChange={(event) => {
                this.handleChange('confirmPassword' , event.target.value);
              }}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button className="button edit-btn" onClick = {(event)=>{this.handleChange('editMode' , true)}}>Edit Profile</button>
          )}
        </div>

        {editMode && <div className="go-back" onClick = {(event)=>{this.handleChange('editMode' , false)}}>Go Back</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const ConnectedSettingsComponent = connect(mapStateToProps)(Settings);

export default ConnectedSettingsComponent;
