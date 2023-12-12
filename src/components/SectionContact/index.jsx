

import {user} from '../../data/user'

import Linkedin from '../../assets/linkedin-icon.png'
import Whatsapp from '../../assets/whatsapp-icon.png'
import Github from '../../assets/github-icon.png'

import styles from './styles.module.css'

export const SectionContato = () =>{
    return(
        <>
          <div className={styles.container} >
              <div>
                  <h3>Contato</h3>
                  <div>
                    <img src={Whatsapp} alt="Ícone do whatsapp" />
                    <img src={Linkedin} alt="Ícone do Linkedin" />
                    <img src={Github} alt="Ícone do Git" />
                  </div>
              </div>
              <div className={styles.title} >
                  <p>Todos os direitos reservados-  {user} </p>
              </div>
          </div>
        </>
    )
}