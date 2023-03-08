import {createStore , combineReducers } from 'redux'

const redurces = combineReducers({
    numeros: function(state, action){
        console.log(state, ' ', action)
        return{
            min: 7,
            max: 31
        }
    },
    nomes: function(state, action){
        console.log(state, ' ', action)
        return[
            'Ana',
            'Bia'
        ]
    }
})


export function storeConfig(){
    return createStore(redurces)
}

