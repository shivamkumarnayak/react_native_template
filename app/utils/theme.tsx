import { MD3LightTheme as DefaultTheme, configureFonts } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const fontConfig = {
  displayLarge: {
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  displayMedium: {
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  displaySmall: {
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  headlineLarge: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  headlineMedium: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  headlineSmall: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  titleLarge: {
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  titleMedium: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  titleSmall: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  labelLarge: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  labelMedium: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  labelSmall: {
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  bodyLarge: {
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  bodyMedium: {
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  bodySmall: {
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
};

const GalleryTheme = {
  colors: {
    primary: '#00bfa6',
    secondary: '#FF7321',
    background: '#FFFFFF',
    surface: '#FAFBFB',
    error: '#FF0000',
    onPrimary: '#FFFFFF',
    onSecondary: '#322942',
    onBackground: '#2D3436',
    onSurface: '#2D3436',
    onError: '#FFFFFF',
    outline: '#9A9B9B',
    success: '#70AD47',                // successColor
    inactive: '#9A9B9B',               // inActiveColor
    fieldInactive: '#EBEAEA',          // fieldInActiveColor
    label: '#595C5F',                  // labelColor
    bodyBackground: '#F5F7FA',         // bodyBackgroundColor
    lightOrange: '#FFFBDE',            // lightOrangeColor (card color)
    primaryFont: '#2D3436',            // primaryFontColor (title color)
    subtitle: '#636E72',               // subtitleColor
    fontGrey: '#E6E5E5',               // fontGreyColor
    font: '#000000',                   // fontColor (default font)
    black: '#000000',                  // blackColor
    white: '#FFFFFF',                  // whiteColor
    red: '#FF0000',                    // redColor
    grey: '#808080',                   // greyColor
    lightGrey: '#E8E8E8',              // lightGreyColor 
    lightPrimary: '#E0F9F5',   
  },
};

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...GalleryTheme.colors,
  },
  fonts: configureFonts({ config: fontConfig }),
  version: 3,
  isV3: true,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: GalleryTheme.colors.primary,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: GalleryTheme.colors.primary,
  },
});

export { CustomTheme, GalleryTheme, styles };
