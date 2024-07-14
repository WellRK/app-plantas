const formattedToDolar = (item: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(item);
};

export { formattedToDolar };
