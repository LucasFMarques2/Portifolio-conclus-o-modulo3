import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import style from './Footer.module.css'



export function Footer(){
    return(
        <div className={style.footer}>
            <section>
                <p>Meu contato:</p>
                <p>61 99138-4322</p>
            </section>
            <section>
                <p>Email:</p>
                <p>lucasfreitasm3@hotmail.com</p>
            </section>
            <section>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><IoLogoFigma /></a>
            </section>
        </div>
    )
}