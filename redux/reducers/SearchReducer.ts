import { IProperty } from "../../models/models";

import { ISearchPropAction, SERACH_PROP } from "../actions/SearchActions";

export interface IPropListState {
    isLoading:boolean;
    propertylist: IProperty[];
}

const initialState = {
    isLoading:false,
    propertylist: []
}

export function SearchReducer(state: IPropListState = initialState, action: ISearchPropAction ) {
    switch (action.type) {
        case SERACH_PROP:
            console.log(action.properties)
            return {
                propertylist: action.properties,
                isLoading:false
            }
    }
    return state;
    
}