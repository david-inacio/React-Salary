import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  handleOnChange = (event) => {
    const { onChange } = this.props;
    onChange(parseFloat(event.target.value || '0'));
  };
  render() {
    const { value } = this.props;
    return (
      <div className="input-field">
        <input
          value={value}
          step="1000"
          type="number"
          id="salarioBruto"
          onChange={this.handleOnChange}
        />
        <label className="active" htmlFor="salarioBruto">
          Salário bruto
        </label>
      </div>
    );
  }
}
