import "../../style/main.css"
import { AiFillInstagram } from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { openMail, openSocial } from "../../utils/mailer"


function Copyright () {
    return (
        <div className="copyright">
            Copyright©2025. All Rights Reserved
        </div>
    )
}

export function Section8 () {
    return (
        <div className="section-8" id="contact">
            <span className="section-8-header">A Legacy of Curiosity and Courage</span>

            <span>
                Zak Bagans has redefined the landscape of paranormal investigation, transforming personal encounters into a multifaceted career that spans television, literature, music, and museum curation. His relentless quest to understand the unknown continues to inspire and intrigue audiences worldwide, solidifying his legacy as a pioneer in exploring the realms beyond our understanding.
            </span>

            <button className="button secondary-button" onClick={(e) => openMail(e, "artistmanagementinquiries@gmail.com")}> Reach Out To Us</button>

            <div className="section-8-contacts">
                <span onClick={() => openSocial("https://www.instagram.com/realzakbagans")}> <AiFillInstagram /> </span>
                <span onClick={() => openSocial("https://x.com/Zak_Bagans")}> <FaSquareXTwitter /> </span>
                <span onClick={() => openSocial("https://www.facebook.com/profile.php?id=61569437371490")}> <FaFacebookSquare /> </span>
            </div>

            <Copyright />
        </div>
    )
}