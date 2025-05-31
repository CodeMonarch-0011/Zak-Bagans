import "../style/components.css"
import { CgMenuGridO } from 'react-icons/cg'
import { openMail, navigate } from "../utils/mailer";

export function Navbar ({ setSliderOpen }) {
    return (
        <div className="navbar">
            <span className="navbar-logo"> ZakBagans </span>

            <nav className="navbar-navigation">
                <span onClick={() => navigate("#home")}>Home</span>
                <span onClick={() => navigate("#story")}>His Story</span>
                <span onClick={() => navigate("#museum")}>Museum</span>
                <span onClick={() => navigate("#contact")}>Contact Us</span>
            </nav>

            <button className="button" onClick={(e) => openMail(e, "artistmanagementinquiries@gmail.com")}>
                Contact Us
            </button>

            <span className="mobile-menu-icon" onClick={() => {setSliderOpen(true); console.log('clidked')} }>
                <CgMenuGridO />
            </span>
        </div>
    )
}