import React, { Component } from 'react';
import style from './style.css';

export default class Input extends Component {
  onChange = (e) => {
    const value = e.target.value;
    const { id, onChange } = this.props;

    onChange({ fieldId: id, value });
  };

  render() {
    const { value } = this.props;

    return (
      <input
        type="text"
        value={value}
        onChange={this.onChange}
        className={style.inputComponent}
      />
    );
  }
}
