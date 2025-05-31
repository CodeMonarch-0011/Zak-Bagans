import zak  from "/images/zak (10).jpeg"
import "../../style/main.css"

export function Section3 () {
    return (
        <section className="section-1">
            <div className="section-1-img">
                <img src={zak} alt="zak-image" className="align-image" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>Personal Life: </span>
                    <span>The Man Behind the Mysteries</span>
                </div>
                
                <div className="section-1-body"> Despite his public persona, Zak maintains a relatively private personal life. He resides in Las Vegas with his beloved dog, Gracie, whom he adopted from the Nevada Society for the Prevention of Cruelty to Animals. Known for his empathy and sensitivity, Zak has openly discussed his struggles with fear and anxiety, particularly regarding snakes, heights, clowns, and “creepy-looking” dolls. These personal challenges have not hindered his pursuit of the paranormal but have instead deepened his connection to the experiences of others. </div>
            </div>
        </section>
    )
}