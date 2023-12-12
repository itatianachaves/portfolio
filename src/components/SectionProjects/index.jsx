
import { projects } from '../../data/projects' 
import { List } from  '../List' 

import styles from './styles.module.css'

export const SectionProjects = ()=>{
    return(
        <div className={styles.container} >
             <h4 className={styles.h4} >Projetos</h4>
            <List data={projects} />
        </div>
    )
}