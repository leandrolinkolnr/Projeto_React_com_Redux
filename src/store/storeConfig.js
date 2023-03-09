import {createStore , combineReducers } from 'redux'

const redurces = combineReducers({
    numeros: function(state, action){

        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
                
            default:
                return{
                    min: 7,
                    max: 31
                }
        }
    },

    nomes: function(state, action){
        console.log("Redurce de nomes")
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

