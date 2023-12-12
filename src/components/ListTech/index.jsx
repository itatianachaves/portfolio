import { CardTech } from "./CardsTech"

import styles from './styles.module.css'

export const ListTech = ({data})=>{

    return (
        <>
            <div className={styles.container} >

            
                <ul>

                <CardTech item={data[0]}   /> 
                <CardTech item={data[1]}   /> 
                <CardTech item={data[2]}   /> 
                <CardTech item={data[3]}   />

                </ul>

            </div>
        </>
    )
}