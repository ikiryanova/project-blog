import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import * as Actions from 'src/pages/my-page/actions';
import Input from 'src/components/input';


class ModalChangePassword extends Component {
  closeModal = () => {
    const { isShowModal, closeModalAction } = this.props;
    closeModalAction({
      isShowModal: !isShowModal
    })
  };

  onSubmit = () => {
    const { dataModal, changePasswordAction } = this.props; 
    changePasswordAction(dataModal);
  };

  render() {
    return (
      <div className={style.modalWrapper}>
        <div className={style.modal}>
          <div className={style.changePswWrapper}>
            <div className={style.changePswRow}>
              <div>
              <Input
                  placeholder={'Текущий пароль'}
                  id="currentPassword"
                  value={this.props.dataModal.currentPassword}
                  onChange={this.props.changeFieldAction}
                  error={this.props.errors.currentPassword}
                />
              </div>
            </div>
            <div className={style.changePswRow}>
              <div>
                <Input
                  placeholder={'Новый пароль'}
                  id="newPassword"
                  value={this.props.dataModal.newPassword}
                  onChange={this.props.changeFieldAction}
                  error={this.props.errors.newPassword}
                />
              </div>
            </div>
            <button className={style.buttonSubmit} onClick={this.onSubmit}>Изменить</button>
          </div>
          <button className={style.buttonClose} onClick={this.closeModal}>X</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    isShowModal: state.myPage.isShowModal,
    dataModal: state.myPage.dataModal,
    errors: state.myPage.errors
  });
};


export default connect(mapStateToProps, Actions)(ModalChangePassword);


