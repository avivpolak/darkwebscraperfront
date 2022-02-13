import { Link } from "react-router-dom";


export default function Header() {

    return (
        <div>
            <div className="center">
                <Link to="/">
                    <h1>Dark web Scraper</h1>
                </Link>
            </div>
            <div className="center">
                <Link to="/Dashboard">Dashboard </Link>
                <Link to="/CustomScrape">CustomScrape </Link>
                <Link to="/LiveData">LiveData </Link>
            </div>

        </div>
    );
}
