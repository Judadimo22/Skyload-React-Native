import {
     GET_LOADS,
     SEARCH 
    } from "../actions";

const initialState = {
    Loads: [],
    LoadsCopy: []
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case GET_LOADS:
            return{
                ...state,
                Loads: action.payload,
                LoadsCopy: action.payload
            };
        case SEARCH:
            {
            let search = [];
            search = state.LoadsCopy?.filter((c) =>
            c.name.toLowerCase().includes(action.payload?.toLowerCase())
             );
            return {
             ...state,
             LoadsCopy: [...search],
            };    
            };
        default:{
            return state
        } ;
    }
};


export default rootReducer;