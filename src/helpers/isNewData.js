export const isNewData = (object1, object2) => {
  const props1 = Object.getOwnPropertyNames(object1);

  let newData = false;

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];

    if (object1[prop] !== object2[prop]) {
      return newData = true;
    }
  }
  return newData;
}