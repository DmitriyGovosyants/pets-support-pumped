import { useEffect } from 'react';

const useDate = (birthdate, func) => {
  useEffect(() => {
    if (!birthdate || birthdate === '') {
      func('-');
    } else {
      const array = birthdate.split('.');
      const newBirthdayFormat = [array[1], array[0], array[2]].join('-');
      const petYears = Math.floor(
        (new Date() - new Date(newBirthdayFormat)) /
          (1000 * 60 * 60 * 24 * 365.25)
      );
      if (petYears === 0) {
        func('Less the one year');
      } else if (petYears === 1) {
        func('One year');
      } else if (petYears > 1) {
        func(`${petYears} years`);
      }
    }
  }, [birthdate, func]);
};

export default useDate;
