import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomScrape from "./components/CustomScrape";
import LiveData from "./components/LiveData";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/CustomScrape" element={<CustomScrape />} />
                    <Route path="/LiveData" element={<LiveData />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
