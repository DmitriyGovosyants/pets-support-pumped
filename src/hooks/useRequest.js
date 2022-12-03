import { useEffect } from 'react';

const useRequest = (req, func) => {
  useEffect(() => {
    switch (req) {
      case 'sell':
        func(`?category=${req}`);
        break;
      case 'lost-found':
        func(`?category=${req}`);
        break;
      case 'in-good-hands':
        func(`?category=${req}`);
        break;
      case 'favorite-ads':
        func('/favorites?');
        break;
      case 'my-ads':
        func('/private?');
        break;
      default:
        func(req);
    }
  }, [req, func]);
};

export default useRequest;
