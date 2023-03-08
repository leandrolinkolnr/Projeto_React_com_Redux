import {createStore , combineReducers } from 'redux'

const redurces = combineReducers({
    numeros: function(state, action){
        console.log(state, ' ', action)
        return{
            min: 1,
            max: 10
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