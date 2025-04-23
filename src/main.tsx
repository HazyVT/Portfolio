import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        'bg': {
            'light': "#eff1f5",
            'dark': "#303446"
        },
        'text': {
            'light': '#4c4f69',
            'dark': '#c6d0f5'
        },
        'sub': {
            'light': '#6c6f85',
            'dark': '#a5adce'
        },
        'link': {
            'light': '#04a5e5',
            'dark': '#99d1db'
        },
        'overlay': {
            'light': '#ccd0da',
            'dark': '#414559'
        }
    }
})

createRoot(document.getElementById("root")!).render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
);
