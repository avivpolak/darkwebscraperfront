import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Link to="/">
                <h1>Dark web Scraper</h1>
            </Link>
            <Link to="/Dashboard">Dashboard </Link>
            <Link to="/CustomScrape">CustomScrape </Link>
            <Link to="/LiveData">LiveData </Link>
        </div>
    );
}
