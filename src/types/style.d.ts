import 'styled-components';
import { Theme } from '@mui/material/styles';

interface CustomTheme {
  tertiary: {
    main: string;
    contrastText: string;
  };
  mainGray: {
    main: string;
    contrastText: string;
  };
}

interface Palette {
  main: string;
  text: string;
}

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
