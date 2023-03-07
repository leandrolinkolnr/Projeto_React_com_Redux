import React from 'react'
import Card from './Card'

export default props => {

    return (
        <Card title="Sorteio de um numero" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{3}</strong>    
                </span>
            </div>
        </Card>
    )
}