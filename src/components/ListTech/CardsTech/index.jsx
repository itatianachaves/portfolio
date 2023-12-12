

import styles from './styles.module.css'

export const CardTech = ({item})=>{
    return (
        <>
        
            <li className={styles.cards}>
            <img src={item.img} alt="" />
                <span>{item.name}</span>
                
                
            </li>

        </>
    )
}