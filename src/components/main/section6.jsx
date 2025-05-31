import "../../style/main.css"
import zakBook  from "/images/zak-book.jpeg"

export function Section6 () {
    return (
        <section className="section-2">
            <div className="section-2-img">
                <img src={zakBook} alt="zak-image" />
            </div>

            <div className="section-2-cnt">
                <div className="section-2-header">
                    <span>Authoring the Supernatural: </span>
                    <span> Literary Contributions </span>
                </div>
                <div className="section-2-body"> Zak has penned several books that delve into his experiences and insights into the paranormal. His 2011 book, “Dark World: Into the Shadows with the Lead Investigator of the Ghost Adventures Crew,” debuted at #18 on the New York Times Best Seller list. He followed this with “I Am Haunted: Living Life Through the Dead” in 2015 and “Ghost-Hunting For Dummies” in 2019, offering readers a comprehensive guide to paranormal investigation. </div>
            </div>
        </section>
    )
}