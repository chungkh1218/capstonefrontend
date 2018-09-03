import {
  Action,
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from "redux";
import { authReducer as AuthReducer, AuthState } from "./reducers/AuthReducer";
import { IPropListState, SearchReducer } from "./reducers/SearchReducer";

import thunk from 'redux-thunk'
import { IHistory } from "../models/models";
import { ListHistReducer, IListHistState } from "./reducers/ListHistReducer";

export interface IRootState {
  auth: AuthState;
  properties: IPropListState,
  histories:IListHistState
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  properties: SearchReducer,
  histories: ListHistReducer

});
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
  return createStore<IRootState, Action, {}, {}>(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
};
