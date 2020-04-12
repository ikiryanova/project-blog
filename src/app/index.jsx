import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router-dom';
import Header from 'src/components/header';
import SignIn from 'src/pages/sign-in';
import SignUp from 'src/pages/sign-up';
import About from 'src/pages/about';
import PostPage from 'src/pages/new-post';
import * as Actions from './actions';
import './style.css';

class App extends Component {
  componentDidMount() {
    this.props.auth();
  }
  render() {
    return (
      <>
        <Header user={this.props.user} signOut={this.props.signOut}/>
        <Switch>
          <Route path='/sign-in' exact={true} component={SignIn}/>
          <Route path='/sign-up' exact={true} component={SignUp}/>
          <Route path='/new-post'exact={true} component={PostPage}/>>
          <Route path='/about' exact={true} component={About}/>>
          <Route path='/' exact={true} render={() => <h1>Main page</h1>}/>
        </Switch>
        
        
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.applicationReducer.user
  });
};

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     dispatch: dispatch,
//     increaseAction: (payload) => {
//       dispatch(Actions.increaseAction(payload));
//     },
//     decreaseAction: (payload) => {
//       dispatch(Actions.decreaseAction(payload));
//     }
//   });
// };

export default connect(mapStateToProps, Actions)(App);
