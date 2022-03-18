// To be done
import { CartItemType } from "../App"
import { IAction, IState, ActionType } from "../Interfaces/Interfaces"

 import React, {ReactElement, ReactComponentElement} from 'react'

const initialState: IState={
    itemsAuto:[],
    itemsHolidays:[],
    itemsPeople:[]
    
}

 export const Store = React.createContext<IState|any>(initialState)

 const actType = ActionType;
function reducer (state:IState, action: IAction):IState{
    switch(action.type){
        case actType.addAuto:
            return{...state, itemsAuto:action.payload}
        case actType.addPortrait:
            return{...state, itemsPeople:action.payload}
        case actType.addHoliday:
            return {...state, itemsHolidays:action.payload}
        
        default: 
        return state
        

    }
}
export function StoreProvider(props:any):JSX.Element{
    const[state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value = {{state, dispatch}}>{props.children}</Store.Provider>
}

