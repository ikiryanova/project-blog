import axiosFetch from './axios';

export const signIn = (data) => {
  return axiosFetch({
    url: 'users/signin',
    method: 'POST',
    data: data
  });
}

export const signUp = (data) => {
  return axiosFetch({
    url: 'users/signup',
    method: 'POST',
    data: data
  });
}

export function auth() {
  return axiosFetch({
    url: 'users/auth',
    method: 'GET'
  });
}

export function signOut() {
  return axiosFetch({
    url: 'users/signout/',
    method: 'GET'
  })
}

export function checkLogin(login) {
  return axiosFetch({
    url: 'users/check-exists/',
    method: 'POST',
    data: {
      login: login
    }
  })
}