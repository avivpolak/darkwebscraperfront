import React from "react";
// import ChartistGraph from "react-chartist";
import { PieChart } from "react-minimal-pie-chart";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Pie from "./Pie";
const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const dataMock:any[] = [];

export const Dashboard = () => {
    const [stats, setStats] = useState([]);
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
            <Pie data={stats} />
            {/* <PieChart
                data={[
                    {
                        label: "JavaScript",
                        value: 1,
                        color: getRandomColor(),
                    },
                    {
                        label: "HTML",
                        value: 2,
                        color: getRandomColor(),
                    },
                    // { title: "HTML", value: stats.html, color: "#00FF00" },
                    // { title: "CSS", value: stats.css, color: "#0000FF" },
                    // {
                    //     title: "TypeScript",
                    //     value: stats.typescript,
                    //     color: "#FFFF00",
                    // },
                    // { title: "C#", value: stats.csharp, color: "#FF00FF" },
                    // { title: "C++", value: stats.cpp, color: "#00FFFF" },
                    // { title: "Python", value: stats.python, color: "#000000" },
                    // { title: "Java", value: stats.java, color: "#FFFFFF" },
                ]}
                // data={stats}
                // options={options}
                // type="Pie"
            /> */}
        </div>
    );
};

export default Dashboard;
