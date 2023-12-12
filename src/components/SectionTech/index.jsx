import { technologies } from '../../data/technologies'  
import { ListTech } from '../ListTech' 

import styles from './styles.module.css'

export const SectionTech = ()=>{
    return(
        <>

            <div className={styles.container} >

                <h4 className={styles.h4} >Tecnologias</h4>
                <ListTech data={technologies} />

            </div>
        </>
    )
}