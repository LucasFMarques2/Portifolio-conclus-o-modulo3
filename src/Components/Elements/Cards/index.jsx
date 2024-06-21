import style from './Cards.module.css'
import {Button} from '../Button'

export function Cards({img, title, description, link}){
    return(
        <div className={style.card}> 
             <section>
        <       img src={img} />
                <h2>{title}</h2>
                <p>{description}</p>
             </section>
            <a href={link}>
                <Button title='Clique aqui'/>
            </a>
        </div>
    )
}