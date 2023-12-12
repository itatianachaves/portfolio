

import { Button } from '../Button'
import styles from './styles.module.css'

export const Header= ()=>{
    return (
        <header className={styles.header}>
            <p>Portfólio</p>
            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Stack</li>
                    <li>Projetos</li>
                </ul>
            </nav>
            <Button>Contato</Button>
      </header>
      
    )
}