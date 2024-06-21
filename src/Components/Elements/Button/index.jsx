import style from './Button.module.css'


export function Button({title, link}){
    return(
        <div className={style.button}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button href>{title}</button>
            </a>
        </div>
    )
}