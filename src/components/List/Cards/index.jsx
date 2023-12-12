

import Git from '../../../assets/git-icon.png'

import styles from './styles.module.css'

export const Card = ({item})=>{
    return (
        <li className={styles.cards}>
            <div>
                <h4 > {item.name} </h4>
                <img src={Git} alt="Ícone do github" />
            </div>
            <p>{item.descricao}</p>
            <a href={item.link}>Saiba mais</a>
        </li>
    )
}