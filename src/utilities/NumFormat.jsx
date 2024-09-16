export const numFormat = (value) => {
  let options = {};
  if (value > 9999) {
    options = {
      notation: "compact",
      maximumFractionDigits: 1,
    };
  }

  return new Intl.NumberFormat("tr", options).format(value);
};
