import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';

class SignUp extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
  };

  onClick = () => {
    console.log('this props', this.props);
    this.props.push('/');
  }

  render() {
    return (
      <div>
        <div>
          <div>
            login
          </div>
          <div>
            <Input
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            first name
          </div>
          <div>
            <Input
              id="firstname"
              value={this.props.dataForm.firstname}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            last name
          </div>
          <div>
            <Input
              id="lastname"
              value={this.props.dataForm.lastname}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            email
          </div>
          <div>
            <Input
              id="email"
              value={this.props.dataForm.email}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            password
          </div>
          <div>
            <Input
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <button onClick={this.onClick}>Sign up</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signUp.dataForm
});

export default connect(mapStateToProps, Actions)(SignUp);
