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
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

function App() {
    const notyf = new Notyf({
        types: [
            {
                type: "error",
                background: "indianred",
                duration: 4000,
                dismissible: true,
                position: { x: "right", y: "top" },
            },
            {
                type: "success",
                background: "green",
                duration: 4000,
                dismissible: true,
                position: { x: "right", y: "top" },
            },
        ],
    });

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
            const response = await axios.get(`http://localhost:3000/`);
            setPasteCounter(response.data.data.length);
            dispatch(add(response.data.data));
            setLastUpdate(new Date().toLocaleTimeString());
        } catch (err) {}
    };

    useEffect(() => {
        updateData();
    }, []);
    useEffect(() => {
        const newPastesCount = pasteCounter - pastes.length;
        if (newPastesCount) {
            notyf.success(`I just found ${newPastesCount} new pastes`);
        }
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
