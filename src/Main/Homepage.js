import { Specials } from "./Specials"
import { Testimonials } from "./Testimonials"
import { About } from "./About"
export const Homepage = () => {
    return (
        <div>
            <Specials />
            <Testimonials />
            <About />
        </div>
    )
}