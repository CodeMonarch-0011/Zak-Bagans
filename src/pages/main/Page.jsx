import { Banner } from "../../components/main/banner"
import { Section1 } from "../../components/main/section1"
import { Section2 } from "../../components/main/section2"
import { Section3 } from "../../components/main/section3"
import { Section4 } from "../../components/main/section4"
import { Section5 } from "../../components/main/section5"
import { Section6 } from "../../components/main/section6"
import { Section7 } from "../../components/main/section7"
import { Section8 } from "../../components/main/section8"
import "../../style/main.css"



export default function Page ({setContactOpen}) {
    return (
        <main className="main-page">
            <Banner setContactOpen={setContactOpen} />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 setContactOpen={setContactOpen} />
        </main>
    )
}