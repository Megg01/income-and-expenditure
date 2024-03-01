const formatCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat("mn-MN", {
    style: "currency",
    currency: "MNT",
  });
  return formatter.format(value);
}



export {formatCurrency}