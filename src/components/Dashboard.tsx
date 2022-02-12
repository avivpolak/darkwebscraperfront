import React from "react";
import ChartistGraph from "react-chartist";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

export const Dashboard = () => {
    const [stats, setStats] = useState({});
    const options = {
        width: "1000px",
        height: "1000px",
        donut: true,
        donutWidth: 200,
    };

    const updateWord = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/stats`);

            if (response.data) {
                setStats(response.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        console.log("useEffect");
        updateWord();
    }, []);

    return (
        <div>
             <Header />
            <ChartistGraph
                data={stats}
                options={options}
                type="Pie"
            />
        </div>
    );
};

export default Dashboard;
