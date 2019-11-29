import createPalette, { Palette, PaletteInput } from './palette';
import createTypography, { Typography, TypographyInput } from './typography';
// import spacing, { Spacing } from './spacing';

export interface Theme {
  palette: Palette,
  typography: Typography,
  // spacing: Spacing
};

export interface ThemeInput {
  palette?: PaletteInput,
  typography?: TypographyInput
}

const createTheme = (options: ThemeInput): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {}
  } = options || {};

  const palette = createPalette(paletteInput)
  const typography = createTypography(typographyInput);

  return {
    palette,    // our color palette
    // spacing,    // a spacing unit to be used on paddings / margins / etc.
    typography  // fonts and fontSizes theme
  };
};

export default createTheme;