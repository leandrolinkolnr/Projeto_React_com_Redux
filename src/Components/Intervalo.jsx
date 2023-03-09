import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'


function Intervalo(props) {

    const {min, max } = props

    return (
        <Card title="Intervalo de numeros" red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={min} readonly></input>
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={max} readonly></input>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps) (Intervalo)