import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router-dom';
import Header from 'src/components/header';
import SignIn from 'src/pages/sign-in';
import SignUp from 'src/pages/sign-up';
import FooterCounter from 'src/components/footer-counter'
import * as Actions from './actions';
import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>

          <Route path='/sign-up'>
            <SignUp />
          </Route>

          <Route path='/new-post'>
            <h2>New post</h2>
          </Route>

          <Route path='/about'>
            <h2>About</h2>
          </Route>

          <Route path='/'>
            <h1>Main page</h1>
          </Route>

        </Switch>
        
        
        {/* <FooterCounter counter={this.props.counter} increaseAction={this.props.increaseAction} decreaseAction={this.props.decreaseAction}/> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    counter: state.applicationReducer.counter
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
