import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomScrape from "./components/CustomScrape";
import LiveData from "./components/LiveData";
import Home from "./components/Home";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { useInterval } from "./hooks/useInterval";
import { add } from "./features/paste/pasteSlice";

function App() {
    const store = useStore().getState();
    const pastes = store.pasteReducer;
    const dispatch = useDispatch();
    const [lastUpdate, setLastUpdate] = useState(
        new Date().toLocaleDateString()
    );
    const [pasteCounter, setPasteCounter] = useState(0);

    useInterval(() => {
        updateData();
    }, 10000);
    const updateData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000`);
            setPasteCounter(response.data.data.length);
            dispatch(add(response.data.data));
            setLastUpdate(new Date().toLocaleTimeString());
        } catch (err) {}
    };
    useEffect(() => {
        updateData();
    }, []);
    useEffect(() => {
        console.log(pasteCounter - pastes.length);
    }, [pasteCounter]);

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
