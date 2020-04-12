import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalChangePassword from './change-password';
import Loading from 'src/components/loading';
import * as Actions from './actions';
import style from './style.css';

class MyPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getUserDataAction(match.params.id);
  }

  // getDateSignUp = (date) => {
  //   return date.slice(0, 4) +'.' + date.slice(5, 7) + '.' + date.slice(8, 10)
  // };

  openModal = () => {
    this.props.openModalAction({
      isShowModal: !this.props.isShowModal
    })
  };

  getDateSignUp = (date) => {
    const registrationDate = new Date(date);
    return registrationDate.toLocaleDateString("ru-RU");
  }
  


  render() {
    const { isShowModal, isLoading, userData} = this.props;
    console.log('LOGIN', this.props.userData.login);
    return(
      <div>
        { isLoading
          ? <div className={style.userPage}>
              <div className={style.userAvatar}>
                <img src={`http://school-blog.ru/images/${userData.avatar}`} alt='avatar'/>
              </div>
              <div className={style.userInfo}>
                <h3>{userData.firstName + ' ' + userData.lastName}</h3>
              
                <ul className={style.userList}>
                  <li><p><b>Имя:</b> {userData.firstName}</p></li>
                  <li><p><b>Фамилия:</b> {userData.lastName}</p></li>
                  <li><p><b>Дата регистрации:</b> {this.getDateSignUp(userData.registrationDate)}</p></li>
                  <li><p><b>E-mail:</b> {userData.email}</p></li>
                  <li><p><b>Количество постов:</b> {userData.postsCount}</p></li>
                  <li><p><b>Количество поставленных лайков:</b> {userData.likesCount}</p></li>
                  <li><p><b>Количество поставленных дизлайков:</b> {userData.dislikesCount}</p></li>
                </ul>
                <button onClick={this.openModal} className={style.button}>Изменить пароль</button>
              </div>
              {
                isShowModal && <ModalChangePassword />
              }
            </div>
          : <Loading />
        }
        
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    isShowModal: state.myPage.isShowModal,
    userData: state.myPage.userData,
    isLoading: state.myPage.isLoading,
    login: state.myPage.login

  });
};

export default connect(mapStateToProps, Actions)(MyPage);