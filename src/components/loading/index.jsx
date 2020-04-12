import React, { Component } from 'react';
import style from './style.css';

export default class Loading extends Component {
  render() {
    return (
      <div className={style.loading}>Loading...</div>
    )
  }
}