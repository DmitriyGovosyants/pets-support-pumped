export const theme = Object.freeze({
  colors: {
    textMain: '#111111',
    textSecond: '#ffffff',
    textThird: '#111321',
    textLowOpacity: '#11111199',
    textLink: '#3091EB',
    black: '#000000',
    accent: '#F59256',
    hover: '#FF6101',
    placeholder: 'rgba(17, 17, 17, 0.6)',

    bgMain: '#fdf7f2',
    bgSecond: '#ffffff',

    dark: '#181C27',
    btnTransperent: 'rgba(255, 255, 255, 0.6)',
    shadow: 'rgba(49, 21, 4, 0.07)',
  },
  spacing: value => `${4 * value}px`,
  header: {
    mobileHeight: '74px',
    tabletAndDesktopHeight: '88px',
  },
  animation: {
    cubicBezier: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
