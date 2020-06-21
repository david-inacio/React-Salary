import React, { Component } from 'react';
import { calculateSalaryFrom } from './helpers/salaryHelper.js';

import InputFullSalary from './components/inputFullSalary/InputFullSalary.js';
import InputReadOnly from './components/inputReadOnly/InputReadyOnly.js';
import ProgressBarSalary from './components/progressBarSalary/ProgressBarSalary.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: {
        salarioBruto: 1000,
        baseInss: 0,
        descontoInss: 0,
        percentualInss: 0,
        baseIrpf: 0,
        descontoIrpf: 0,
        percentualIrpf: 0,
        salarioLiquido: 0,
        percentualSalarioLiquido: 0,
      },
    };
  }

  componentDidMount() {
    const fullSalary = this.calculateSalary(this.state.fullSalary.salarioBruto);
    this.setState(fullSalary);
  }

  handleSalaryChange = (salary) => {
    const fullSalary = this.calculateSalary(salary);
    this.setState(fullSalary);
  };

  calculateSalary(salary) {
    const { fullSalary } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(salary);
    fullSalary.salarioBruto = salary;
    fullSalary.baseInss = baseINSS;
    fullSalary.descontoInss = discountINSS;
    fullSalary.percentualInss = discountINSS / baseINSS || 0;
    fullSalary.baseIrpf = baseIRPF;
    fullSalary.descontoIrpf = discountIRPF;
    fullSalary.percentualIrpf = discountIRPF / salary || 0;
    fullSalary.salarioLiquido = netSalary;
    fullSalary.percentualSalarioLiquido = netSalary / salary || 0;
    return fullSalary;
  }

  render() {
    const { fullSalary } = this.state;
    const {
      salarioBruto,
      baseInss,
      descontoInss,
      percentualInss,
      baseIrpf,
      descontoIrpf,
      percentualIrpf,
      salarioLiquido,
      percentualSalarioLiquido,
    } = fullSalary;
    return (
      <div className="container">
        <h1 style={cssStyles.textCenter}>React Salário</h1>
        <div className="row">
          <div className="col s12">
            <InputFullSalary
              value={salarioBruto}
              onChange={this.handleSalaryChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3">
            <InputReadOnly value={baseInss} description="Base INSS:" />
          </div>
          <div className="col s12 m3">
            <InputReadOnly
              value={descontoInss}
              percent={percentualInss}
              color="Inss"
              description="Desconto INSS:"
            />
          </div>
          <div className="col s12 m3">
            <InputReadOnly value={baseIrpf} description="Base IRPF:" />
          </div>
          <div className="col s12 m3">
            <InputReadOnly
              value={descontoIrpf}
              percent={percentualIrpf}
              color="Irpf"
              description="Desconto IRPF:"
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3">
            <InputReadOnly
              value={salarioLiquido}
              percent={percentualSalarioLiquido}
              color="SalarioLiquido"
              description="Salário líquido:"
            />
          </div>
        </div>
        <ProgressBarSalary
          percents={{
            percentualInss,
            percentualIrpf,
            percentualSalarioLiquido,
          }}
        />
      </div>
    );
  }
}

const cssStyles = {
  textCenter: { textAlign: 'center' },
};
