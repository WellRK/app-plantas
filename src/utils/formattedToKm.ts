const formattedToKm = (distance: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'unit',
    unit: 'kilometer',
    maximumFractionDigits: 1,
  }).format(distance);
};

export { formattedToKm };
