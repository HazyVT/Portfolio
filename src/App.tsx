import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Works from "./router/Works";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
    return (
        <div className="page-container">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
