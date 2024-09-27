import { Link } from "react-router-dom";
import logo from "../../assets/images/teamLogo.jpg";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-content_logo">
                <Link to="/"><img className="header-logo" src={logo} alt="Logo" /></Link>
                <h2 className="header-title">Team management</h2>
            </div>
        </header>
    )
}
