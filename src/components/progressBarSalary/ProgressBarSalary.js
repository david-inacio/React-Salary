import React, { Component } from 'react';
import css from './progressbarsalary.module.css';

export default class ProgressBarSalary extends Component {
  render() {
    const {
      percentualInss,
      percentualIrpf,
      percentualSalarioLiquido,
    } = this.props.percents;
    return (
      <div className={css.divBar}>
        <span
          style={{ width: `${percentualInss * 100}%` }}
          className={css.colorInss}
        ></span>
        <span
          style={{ width: `${percentualIrpf * 100}%` }}
          className={css.colorIrpf}
        ></span>
        <span
          style={{ width: `${percentualSalarioLiquido * 100}%` }}
          className={css.colorSalarioLiquido}
        ></span>
      </div>
    );
  }
}
