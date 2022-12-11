import { useEffect, useState } from 'react';

export const useDate = (birthdate) => {
  const [state, setState] = useState('');

  useEffect(() => {
    if (!birthdate || birthdate === '') {
      return setState('-');
    } 

    const array = birthdate.split('.');
    const newBirthdayFormat = [array[1], array[0], array[2]].join('-');
    const petYears = Math.floor(
      (new Date() - new Date(newBirthdayFormat)) /
        (1000 * 60 * 60 * 24 * 365.25)
    );

    if (petYears === 0) {
      setState('Less the one year');
    }
    if (petYears === 1) {
      setState('One year');
    }
    if (petYears > 1) {
      setState(`${petYears} years`);
    }
  }, [birthdate]);

  return [state];
};
