export const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

export const device = {
  mobile: `@media screen and (min-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,

  mobileOnly: `@media screen and (max-width: 767.99px)`,
  tabletOnly: `@media screen and (min-width: ${size.tablet}) and (max-width: 1279.99px)`,
  notDesktop: `@media screen and (max-width: 1279.99px)`,
};

export const retina =
  '@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)';
