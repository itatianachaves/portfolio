

import {Card} from './Cards'

import styles from './styles.module.css'

export const List = ({data})=>{

    console.log(data)
    return (
        <>
            <div className={styles.container} >

                <ul>

                <Card item={data[0]} /> 
                <Card item={data[1]} /> 
                <Card item={data[2]} /> 
                <Card item={data[3]} />
                </ul>

            </div>
        </>
    )
}