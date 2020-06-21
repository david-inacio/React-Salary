const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const percentFormatter = Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function Format(value, style = 'currency') {
  return style === 'currency'
    ? moneyFormatter.format(value)
    : percentFormatter.format(value);
}

export { Format };
