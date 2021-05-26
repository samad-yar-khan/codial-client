import React from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/posts'

class App extends React.Component {
   
   componentDidMount() {
      
      this.props.dispatch(fetchPosts());
      
   }
   
   
   render() {

      console.log("PROPS ",this.props);

      return (
         <div>
               HEY
         </div>
      );
   }
}

function mapStateToProps(state){
   return{
      posts : state.posts
   }
}

let connectedAppComponent = connect(mapStateToProps)(App)
export default connectedAppComponent;