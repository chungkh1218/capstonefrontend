import {
  Action,
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from "redux";
import { authReducer as AuthReducer, AuthState } from "./reducers/AuthReducer";
import { IPropListState, SearchReducer } from "./reducers/SearchReducer";
import { ListHistReducer, IListHistState } from "./reducers/ListHistReducer";
import { WatchListState, WatchListReducer } from "./reducers/WatchListReducer";

import thunk from "redux-thunk";
import { IHistory } from "../models/models";

export interface IRootState {
  auth: AuthState;
  properties: IPropListState;
  histories: IListHistState;
  watchList: WatchListState;
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  properties: SearchReducer,
  histories: ListHistReducer,
  watchList: WatchListReducer
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
