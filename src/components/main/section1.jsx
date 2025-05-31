import "../../style/main.css"
import HauntedHouse  from "/images/haunted-house.png"

export function Section1 () {
    return (
        <section className="section-1" id="story">
            <div className="section-1-img">
                <img src={HauntedHouse} alt="zak-image" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>From <span className="cross-word">Skeptic</span> to Believer: </span>
                    <span>The Genesis of a Paranormal Journey</span>
                </div>
                
                <div className="section-1-body"> Born on April 5, 1977, in Washington, D.C., and raised in Glen Ellyn, Illinois, Zak Bagans’ early years were marked by a fascination with the unknown. While working at his mother’s antique shop, he developed an appreciation for unique and eerie collectibles. However, it wasn’t until a chilling encounter in his Michigan apartment—where he believes he communicated with the spirit of a woman who had taken her own life—that his curiosity transformed into a life-altering mission. This pivotal experience propelled him into the world of paranormal investigation. ￼ ￼ </div>
            </div>
        </section>
    )
}