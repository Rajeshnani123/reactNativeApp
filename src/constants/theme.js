import {DefaultTheme} from '@react-navigation/native';
import {extendTheme} from 'native-base';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//FONT COLLECTIONS
const FONTBLACK = 'Poppins-Regular';
const FONTBOLD = 'Poppins-Bold';
const FONTSEMIBOLD = 'Poppins-Regular';
const FONTREGULAR = 'Poppins-Regular';

//COLOR COLLECTIONS
export const COLORS = {
  primary: '#ffb43a',
  primaryLight: '#fb7185',
  transparentPrimary: 'rgba(227, 120, 75, 0.4)',
  secondary: '#FFA133',
  secondaryLight: '#FDDED4',
  transparentSecondary: '#FFD9AD',

  //COLORS SHADES
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',

  orange: '#FFA133',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',

  blue: '#0064C0',
  darkBlue: '#111A2C',

  green: '#008e03',
  lightGreen: '#75ff71',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightpurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',
  white2: '#FBFBFB',

  transparent: 'transparent',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};

//SIZES COLLECTIONS
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: '5%',

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 15,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 18,
  body4: 16,
  body5: 12,

  // app dimensions
  width,
  height,
};

//FONT STYLES COLLECTIONS
export const FONTS = {
  largeTitle: {fontFamily: FONTBLACK, fontSize: SIZES.largeTitle},
  h1: {fontFamily: FONTBOLD, fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: FONTBOLD, fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: FONTSEMIBOLD, fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: FONTSEMIBOLD, fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: FONTSEMIBOLD, fontSize: SIZES.h5, lineHeight: 22},
  body1: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

//CUSTOM LIBRARY THEME
//NATIVE BASE
export const NBTheme = extendTheme({
  colors: {
    primary: {
      50: '#ffb43a',
      100: '#ffb43a',
      200: '#ffb43a',
      300: '#ffb43a',
      400: '#ffb43a',
      500: '#ffb43a',
      600: '#ffb43a',
      700: '#ffb43a',
      800: '#ffb43a',
      900: '#ffb43a',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});
//REACT NAVIGATION
export const RNTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
    background: '#f9f5f5',
  },
};

const THEME = {COLORS, SIZES, FONTS, NBTheme, RNTheme};

export default THEME;
