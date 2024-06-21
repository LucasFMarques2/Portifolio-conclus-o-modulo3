import style from './Project.module.css'
import { Cards } from '../../Elements/Cards'
import page from '../../../assets/imgProjects/image.png'

export function Projects(){
    return(
        <div className={style.projects} id='Projects'>
            <h1>Projetos</h1>

            <section>

            <Cards
                img={page}
                title="Projeto 1"
                description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptate obcaecati qui, asperiores deserunt unde nihil a doloribus expedita velit iste sapiente placeat iusto ullam ex nostrum distinctio, eveniet reiciendis!"
                link="https://www.google.com"
            />
            <Cards
                img={page}
                title="Projeto 2"
                description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptate obcaecati qui, asperiores deserunt unde nihil a doloribus expedita velit iste sapiente placeat iusto ullam ex nostrum distinctio, eveniet reiciendis!"
                link="https://www.google.com"
            />
            </section>
            <section>
            <Cards
                img={page}
                title="Projeto 3"
                description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptate obcaecati qui, asperiores deserunt unde nihil a doloribus expedita velit iste sapiente placeat iusto ullam ex nostrum distinctio, eveniet reiciendis!"
                link="https://www.google.com"
            />
            <Cards
                img={page}
                title="Projeto 4"
                description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptate obcaecati qui, asperiores deserunt unde nihil a doloribus expedita velit iste sapiente placeat iusto ullam ex nostrum distinctio, eveniet reiciendis!"
                link="https://www.google.com"
            />

            </section>
        </div>
        
    )
}