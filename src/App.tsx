import { Box, Heading, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Navbar from "./components/Navbar";
import Works from "./router/Works";

function App() {
    return (
        <Box w="100vw" h="100vh" color="#ebdbb2">
            <Router>
                <Center w="100vw">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/works" element={<Works />} />
                    </Routes>
                </Center>
            </Router>
        </Box>
    );
}

export default App;
