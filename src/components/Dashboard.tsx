import React from "react";
import ChartistGraph from "react-chartist";
import { useState, useEffect } from "react";
import axios from "axios";
const defaultStats = {
    persentage: [
        7.042253521126761, 4.225352112676056, 4.225352112676056,
        5.633802816901409, 1.4084507042253522, 7.042253521126761,
        2.8169014084507045,  1.4084507042253522,
        1.4084507042253522, 1.4084507042253522, 2.8169014084507045,
        1.4084507042253522, 2.8169014084507045, 2.8169014084507045,
    ],
    labels: [
        "Business & Industrial",
        "Computers & Electronics,Computer Security",
        "Finance,Investing,Currencies & Foreign Exchange",
        "Adult",
        "Computers & Electronics,Computer Security,Hacking & Cracking",
        "Sensitive Subjects",
        "Real Estate,Real Estate Services",
        "Computers & Electronics",
        "Online Communities",
        "Shopping,Apparel,Clothing Accessories",
        "Arts & Entertainment",
        "Finance,Banking",
        "Shopping,Consumer Resources",
        "Arts & Entertainment,Music & Audio",
    ],
}
export const  Dashboard=()=> {
    const [stats, setStats] = useState(defaultStats);
const options = {
  width: '1000px',
  height: '1000px',
  donut: true,
  donutWidth: 200,
};

    const updateWord = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/stats`);
            console.log(response);
            if (response.data) {
                setStats(response.data.data);
            }
        } catch (err) {
            setStats(defaultStats);
        }
    };
    useEffect(() => {
        // Update the document title using the browser API
        updateWord();
    }, []);

    return (
        <div >
            <ChartistGraph
                data={{
                    labels: stats.labels,
                    series: stats.persentage,
                }}
                options={options}
                type="Pie"
                
            />

        </div>
    );
}

export default Dashboard;
