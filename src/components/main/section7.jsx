import "../../style/main.css"
import zakAlbum  from "/images/necro-fusion.jpg"

export function Section7 () {
    return (
        <section className="section-1 section-7">
            <div className="section-1-img">
                <img src={zakAlbum} alt="zak-image" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>Musical Ventures:</span>
                    <span>Fusing Sound with the Supernatural</span>
                </div>
                
                <div className="section-1-body"> In 2012, Zak collaborated with Lords of Acid’s Praga Khan to release “NecroFusion,” an album that blends electronic music with audio captured during his paranormal investigations. The project reached #1 on iTunes, showcasing his ability to merge his passion for the supernatural with creative expression. </div>
            </div>
        </section>
    )
}