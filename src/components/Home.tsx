import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <h1>Dark web Scraper</h1>
            <Link to="/Dashboard">Dashboard </Link>
            <Link to="/CustomScrape">CustomScrape </Link>
            <Link to="/LiveData">LiveData </Link>
        </div>
    );
}
