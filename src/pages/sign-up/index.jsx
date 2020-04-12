import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import Input from 'src/components/input';
import style from './style.css';
import * as Actions from './actions';

class SignUp extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    this.props.signUpAction(this.props.dataForm);
  }

  checkLogin = () => {
    const { checkLoginAction, dataForm} = this.props;
    checkLoginAction(dataForm.login);
  }

  render() {
    const { errors } = this.props;
    return (
      <div className={style.signUpWrapper}>
        <div className={style.signUpRow}>
          <div>
            <Input
              placeholder={'Login'}
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
              onBlur={this.checkLogin}
              error={errors.login}
            />
          </div>
        </div>
        <div className={style.signUpRow}>
          <div>
            <Input
              placeholder={'First name'}
              id="firstName"
              value={this.props.dataForm.firstName}
              onChange={this.props.changeFieldAction}
              error={errors.firstName}
            />
          </div>
        </div>
        <div className={style.signUpRow}>
          <div>
            <Input
              placeholder={'Last name'}
              id="lastName"
              value={this.props.dataForm.lastName}
              onChange={this.props.changeFieldAction}
              error={errors.lastName}
            />
          </div>
        </div>
        <div className={style.signUpRow}>
          <div>
            <Input
              placeholder={'Email'}
              id="email"
              value={this.props.dataForm.email}
              onChange={this.props.changeFieldAction}
              error={errors.email}
            />
          </div>
        </div>
        <div className={style.signUpRow}>
          <div>
            <Input
              placeholder={'Password'}
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
              error={errors.password}
            />
          </div>
        </div>
        <button className={style.submit} onClick={this.onSubmit}>Зарегистрироваться</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signUp.dataForm,
  errors: state.signUp.errors
});

export default connect(mapStateToProps, {
  push,
  ...Actions
})(SignUp);

