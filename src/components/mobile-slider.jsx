import "../style/components.css"
import { BsX } from "react-icons/bs"
import { navigate, openMail } from "../utils/mailer"

export function MobileSlider ({ setSliderOpen, setContactOpen }) {

    function handleNavigation (link) {
        navigate(link)
        setSliderOpen(false)
    }

    function contact () {
        setContactOpen(true)
        setSliderOpen(false)
    }

    return (
        <div className="mobile-slider">
            <span className="exit-icon" onClick={() => setSliderOpen(false)}> <BsX /> </span>

            <nav className="navbar-navigation">
                <span onClick={() => handleNavigation("#home")}>Home</span>
                <span onClick={() => handleNavigation("#story")}>His Story</span>
                <span onClick={() => handleNavigation("#museum")}>Museum</span>
                <span onClick={() => handleNavigation("#adventures")}>Adventures</span>
                <span onClick={() => handleNavigation("#contact")}>Contact Us</span>
            </nav>

            <button className="button slider-button" onClick={contact}>
                Contact us
            </button>
        </div>
    )
}