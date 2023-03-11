import {createStore , combineReducers } from 'redux'
import numerosReducer from './redurces/numeros'

const redurces = combineReducers({
    numeros: numerosReducer
})

export function storeConfig(){
    return createStore(redurces)
}

