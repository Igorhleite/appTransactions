const formatValue = (value: number): string =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value); // TODO

export default formatValue;
