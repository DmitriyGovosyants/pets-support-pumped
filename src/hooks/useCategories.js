import { useEffect } from 'react';

const useCategories = (category, func) => {
  useEffect(() => {
    switch (category) {
      case 'sell':
        func('sell');
        break;
      case 'lost-found':
        func('lost/found');
        break;
      case 'in-good-hands':
        func('In good hands');
        break;
      default:
        func('sell');
    }
  }, [category, func]);
};

export default useCategories;
