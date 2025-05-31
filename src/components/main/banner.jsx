import "../../style/main.css"
import { openMail } from "../../utils/mailer"
import Zak from "/images/zak-bck.png"

export function Banner() {
    return (
        <section className="main-page-banner" id="home">
            <div className="main-page-banner-content">
                <div className="main-page-banner-header">
                    <span> Zak Bagans: <span className="text-backdrop" /> </span> <br /> The Fearless Explorer of the Paranormal Realm
                </div>

                <span>From once-skeptical filmmaker to becoming the face of ghost hunting and building a supernatural empire</span>

                <button className="button" onClick={() => openMail("artistmanagementinquiries@gmail.com")}>
                    Get in Touch
                </button>
            </div>

            <div className="main-page-banner-bck-img">
                <img src={Zak} alt="zak-bagans" />

                <div className="pink-ball" />
                <div className="pink-ball" />
                <div className="pink-ball" />
            </div>


        </section>
    )
}