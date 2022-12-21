import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu() {
    return (
        <header className="header">
            <nav className="navegation">
                <Link to="/">Home</Link>
                <Link to="/cast">Cast</Link>
                <Link to="/curiosities">Curiosities</Link>
            </nav>
        </header>
    )
}