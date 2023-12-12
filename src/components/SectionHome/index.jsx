
import styles from './styles.module.css'

import {username} from '../../data/user'
import Banner from '../../assets/banner-img.png'
import { Button } from '../Button'

export const SectionHome = () =>{
    return (
        <>
            <div className={styles.container} >

                <div className={styles.about} >
                    <p> {username} </p>
                    <h1>Bem Vindo, ao meu Portfólio</h1>
                    <span>A perserverança te faz ir mais longe.</span>
                    <div>
                    <Button>saiba Mais</Button>
                    </div>
                </div>

                <figure>
                <img src={Banner} alt="foto de um computador" />
                </figure>

            </div>
        </>
    )
}