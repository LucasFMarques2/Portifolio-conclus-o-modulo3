import { NavBar } from "../../Components/Sections/NavBar"
import { Presentation } from "../../Components/Sections/Presentation"
import { Projects } from "../../Components/Sections/Project"
import { About } from "../../Components/Sections/About"
import { Footer } from "../../Components/Sections/Footer"
import style from './Home.module.css'


export function Home(){
    return(
    <div className={style.home}>
        <NavBar/>
        <Presentation />
        <Projects />
        <About/>
        <Footer/>
    </div>
    )
}