export const isNewData = (object1, object2) => {
  const props1 = Object.getOwnPropertyNames(object1);

  let newData = false;

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];

    if (prop === 'phone') {
      const currentPhone = object1[prop].split(/[-()]+/).join('');
      const dataPhone = object2[prop].split(/[-()]+/).join('');

      if (currentPhone !== dataPhone) {
        return true;
      }
    }

    if (prop !== 'phone') {
      if (object1[prop] !== object2[prop]) {
        return true;
      }
    }
  }

  return newData;
}