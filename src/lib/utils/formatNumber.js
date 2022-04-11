export const formatNumber = (number) => {
  const formatter = new Intl.NumberFormat("tr-TR");
  return formatter.format(number);
};
