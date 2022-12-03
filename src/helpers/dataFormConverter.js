export const dataFormConverter = obj => {
  return Object.entries(obj).reduce((acc, itm) => {
    if (itm[0] !== 'confirmPassword') {
      acc[itm[0]] = itm[1].value;
    }
    return acc;
  }, {});
};
