import {createStore , combineReducers } from 'redux'

const redurces = combineReducers({

    numeros: function(state, action){
        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                    }
                
            default:
                return{
                    min: 0,
                    max: 100
                }
        }
    },
})


export function storeConfig(){
    return createStore(redurces)
}

