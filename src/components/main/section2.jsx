import "../../style/main.css"
import zak  from "/images/zak (1).jpeg"

export function Section2 () {
    return (
        <section className="section-2" id="adventures">
            <div className="section-2-img">
                <img src={zak} alt="zak-image" />
            </div>

            <div className="section-2-cnt">
                <div className="section-2-header">
                    <span>Ghost Adventures: </span>
                    <span> Crafting a Paranormal Empire </span>
                </div>
                <div className="section-2-body"> In 2004, Zak co-created the documentary “Ghost Adventures,” which chronicled his investigations into haunted locations. The film’s success led to the launch of the “Ghost Adventures” series on the Travel Channel in 2008. As the principal host and executive producer, Zak has led his team through over 200 episodes, exploring some of the world’s most haunted sites. His immersive approach and fearless demeanor have captivated audiences, solidifying his status as a leading figure in paranormal entertainment.</div>
            </div>
        </section>
    )
}