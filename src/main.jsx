import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    text: {
      main: "#e9eeee",
    },
    background: {
      main: "#080c0d",
      50: "#eff4f5",
      100: "#dfe9ec",
      200: "#c0d3d8",
      300: "#a0bec5",
      400: "#81a8b1",
      500: "#61929e",
      600: "#4e757e",
      700: "#3a585f",
      800: "#273a3f",
      900: "#131d20",
    },
    primary: {
      main: "#a7ccd1",
      50: "#eef5f6",
      100: "#deeced",
      200: "#bcd8dc",
      300: "#9bc5ca",
      400: "#79b1b9",
      500: "#589ea7",
      600: "#467e86",
      700: "#355f64",
      800: "#233f43",
      900: "#122021",
    },
    secondary: {
      main: "#35737b",
      50: "#edf6f7",
      100: "#dbedf0",
      200: "#b8dce0",
      300: "#94cad1",
      400: "#70b8c2",
      500: "#4da7b3",
      600: "#3d858f",
      700: "#2e646b",
      800: "#1f4347",
      900: "#0f2124",
    },
    accent: {
      main: "#4eb5c2",
      50: "#ecf7f8",
      100: "#d9eff2",
      200: "#b3dfe5",
      300: "#8dcfd8",
      400: "#67bfcb",
      500: "#41afbe",
      600: "#348c98",
      700: "#276972",
      800: "#1a464c",
      900: "#0d2326",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
