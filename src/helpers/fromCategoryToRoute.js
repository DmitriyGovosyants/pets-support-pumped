export const fromCategoryToRoute = category =>
  category.toLowerCase().split(' ').join('-').split('/').join('-');
