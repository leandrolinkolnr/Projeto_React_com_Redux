import React from 'react'
import Card from './Card'

export default props => {


    //const min = props.min     Tambem poderia ser assim
    //const max = props.max

    const {min, max} = props

    return (
        <Card title="Media dos numeros" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min)/ 2}</strong>    
                </span>
            </div>
        </Card>
    )
}