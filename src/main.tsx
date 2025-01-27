import { createRoot } from "react-dom/client";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import App from "./App.tsx";

const system = createSystem(defaultConfig, {
    globalCss: {
        "html, body": {
            backgroundColor: "#282828",
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <ChakraProvider value={system}>
        <App />
    </ChakraProvider>
);
