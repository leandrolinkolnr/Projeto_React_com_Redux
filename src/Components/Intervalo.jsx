import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo } from '../store/actions/numeros'

function Intervalo(props) {

    const {min, max } = props;
    props.alterarMinimo(130);

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

function mapDispatchToProp(dispatch){
    return {
       alterarMinimo(novoNumero){
            // Action Creator que recebe action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProp) (Intervalo)