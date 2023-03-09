import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

function Intervalo(props) {

    const {min, max } = props;

    return (
        <Card title="Intervalo de numeros" red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={min} 
                    onChange={e => props.alterarMinimo(+e.target.value)}  ></input>
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={max}
                    onChange={e => props.alterarMaximo(+e.target.value)}  ></input>
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

function mapDispatchToProp(dispatch){
    return {
       alterarMinimo(novoNumero){
            // Action Creator que recebe action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
       },
       alterarMaximo(novoNumero){
        const action = alterarNumeroMaximo(novoNumero)
        dispatch(action)
   }    }
}

export default connect(mapStateToProps, mapDispatchToProp) (Intervalo)