import "../../style/main.css"
import zak  from "/images/zak (6).jpeg"

export function Section5 () {
    return (
        <section className="section-1">
            <div className="section-1-img">
                <img src={zak} alt="zak-image" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>Beyond Television: </span>
                    <span>Expanding the Paranormal Narrative</span>
                </div>
                
                <div className="section-1-body"> Zak’s influence extends beyond “Ghost Adventures.” He has hosted and produced several spin-off series, including “Ghost Adventures: Aftershocks,” “Deadly Possessions,” and “The Haunted Museum,” a horror anthology series created in collaboration with filmmaker Eli Roth. In 2018, he directed and starred in the documentary “Demon House,” which investigates the alleged demonic possession of a family in Gary, Indiana. The film achieved significant success, topping iTunes’ documentary and horror charts. </div>
            </div>
        </section>
    )
}