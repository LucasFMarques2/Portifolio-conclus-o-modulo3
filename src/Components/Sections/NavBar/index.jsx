import style from './NavBar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav';

export function NavBar(){
    return(
        <div className={style.navBar}>
            <section id="menu">
                <ul>
                <li><Nav.Link href="#Presentetion">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
                <li> <Nav.Link href="#About">Sobre mim</Nav.Link></li>
                </ul>
            </section>
                <ul>
                    <li><a href=""><FaGithub/></a></li>
                    <li><a href=""><FaLinkedin /></a></li>
                </ul>

        </div>
    )
}