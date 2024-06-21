import {TimeLine} from '../../Elements/TimeLine'
import style from './About.module.css'

export function About(){
    const event = [
        { year: '2018', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { year: '2019', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { year: '2020', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { year: '2021', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
      ];

    return(
        <div className={style.about} id='About'>
            <h1>Sobre mim</h1>
            <section>
            <TimeLine events={event} />
            </section>
        </div>
    )
}