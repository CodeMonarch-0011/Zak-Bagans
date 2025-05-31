import "../../style/main.css"
import zak1  from "/images/zak (2).jpeg"
import zak2  from "/images/zak (3).jpeg"
import zak3  from "/images/zak (4).jpeg"
import zak4  from "/images/zak (5).jpeg"

export function Section4 () {
    return (
        <section className="section-4" id="museum">
            <div className="section-4-header">
                <span>The Haunted Museum:</span>
                <span>A Curated Collection of the Macabre</span>
            </div>

            <div className="section-4-cnt">
                In 2017, Zak opened The Haunted Museum in Las Vegas, a 14,000-square-foot mansion housing over 30 themed rooms filled with haunted artifacts and oddities. Notable exhibits include the infamous Dybbuk Box, Dr. Jack Kevorkian’s “Death Van,” and the staircase from the notorious Indiana “Demon House.” The museum has garnered critical acclaim, receiving the Las Vegas Mayor’s Urban Design Award and being voted the #1 Best Haunted Destination in America by USA Today.
            </div>

            <div className="section-4-carousel">
                <div className="section-4-carousel-inner">
                    <div> <img src={zak1} /> </div>
                    <div> <img src={zak2} /> </div>
                    <div> <img src={zak3} /> </div>
                    <div> <img src={zak4} /> </div>
                    <div> <img src={zak1} /> </div>
                    <div> <img src={zak2} /> </div>
                    <div> <img src={zak3} /> </div>
                    <div> <img src={zak4} /> </div>
                </div>
            </div>
        </section>
    )
}