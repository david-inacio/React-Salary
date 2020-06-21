import React, { Component } from 'react';
import css from './inputreadonly.module.css';
import { Format } from '../../helpers/formaterHelper.js';

export default class InputReadOnly extends Component {
  render() {
    const { value, description, percent, color } = this.props;
    const formattedValue = `${Format(value)}${
      percent !== undefined && percent > 0
        ? ` (${Format(percent, 'percent')})`
        : ''
    }`;
    return (
      <div className="input-field">
        <input
          className={`${css[`color${color}`]} ${css.bold}`}
          value={formattedValue}
          readOnly={true}
          id={description}
        />
        <label className="active" htmlFor={description}>
          {description}
        </label>
      </div>
    );
  }
}
