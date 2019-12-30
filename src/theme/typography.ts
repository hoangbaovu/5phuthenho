export interface Typography {
  fontFamily: string;
  fontFamilySecondary: string;
  fontFamilyDefaultSystem: string;
  fontSizeH1: string;
  fontSizeH2: string;
  fontSizeH3: string;
  fontSizeH4: string;
  fontSizeH5: string;
  fontSizeH6: string;
  fontSizeButton: string;
  fontWeightNormal: number;
  fontWeightLight: number;
  fontWeightBold: number;
};

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontSize?: number;
  htmlFontSize?: number;
};
const defaultFontFamily = "'Roboto', 'Segoe UI', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const createTypography = (typography: TypographyInput): Typography => {
  const {
    fontFamily = defaultFontFamily,
    fontFamilySecondary = "'Pacifico', cursive",
    fontFamilyDefaultSystem = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",

    /* sizes */
    fontSize = 14,
    htmlFontSize = 16,

    /* weights */
    fontWeightNormal = 400,
    fontWeightLight = 300,
    fontWeightBold = 700
  } = typography;

  const coef = fontSize / 14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  return {
    fontFamily,
    fontFamilySecondary,
    fontFamilyDefaultSystem,
    fontSizeH1: pxToRem(96),
    fontSizeH2: pxToRem(60),
    fontSizeH3: pxToRem(48),
    fontSizeH4: pxToRem(34),
    fontSizeH5: pxToRem(24),
    fontSizeH6: pxToRem(20),
    fontSizeButton: pxToRem(14),
    fontWeightNormal,
    fontWeightLight,
    fontWeightBold
  };
};

export default createTypography;