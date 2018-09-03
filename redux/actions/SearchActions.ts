import axios from "axios";
import { Dispatch } from "redux";
import { IProperty } from "../../models/models";
import Config from "react-native-config";

export const SERACH_PROP = "SEARCH_PROP";
export type SEARCH_PROP = typeof SERACH_PROP;

export interface ISearchPropAction {
  type: SEARCH_PROP;
  properties: IProperty[];
}

//noraml action creator
export function SearchPropertyAction(
  properties: IProperty[]
): ISearchPropAction {
  console.log();
  return {
    properties,
    type: SERACH_PROP
  };
}

//thunk action creator

export function SearchPropFromAPIAction(search:string){
    return (dispatch:Dispatch<ISearchPropAction>) =>{
        axios.get(`http://localhost:8080/api/estate/infoA/${search}`)
            .then(res =>{
                dispatch(SearchPropertyAction(res.data));    
            })
            .catch((err) => console.log('uh oh error', err))
    }
}
