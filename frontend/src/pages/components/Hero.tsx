import "../../style/hero.css"
import HeroWord from "./HeroWord"


export default function Hero() {
     return (
        <section id='hero'>
            <div id="hero-content">
                <HeroWord text="Navigating" />
                <HeroWord text="Startups IN" />
                <HeroWord text="Alternative" />
                <HeroWord text="Industries" />
            </div>
        </section>
    )
}
