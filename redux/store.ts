import {
  Action,
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from "redux";
import { authReducer as AuthReducer, IAuthState } from "./reducers/AuthReducer";
import { IPropListState, SearchReducer } from "./reducers/SearchReducer";
import { ListHistReducer, IListHistState } from "./reducers/ListHistReducer";
import { GetImgReducer, IListHistImgState } from "./reducers/GetImgReducer";
import { WatchListState, WatchListReducer } from "./reducers/WatchListReducer";

import thunk from "redux-thunk";
import { IHistory } from "../models/models";

export interface IRootState {
  auth: IAuthState;
  properties: IPropListState;
  histories: IListHistState;
  watches: WatchListState;
  url: IListHistImgState;
  isLoading: IPropListState;
  isLoading1: IListHistState;
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  properties: SearchReducer,
  url: GetImgReducer,
  histories: ListHistReducer,
  watches: WatchListReducer,
  isLoading:SearchReducer,
  isLoading1:ListHistReducer
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
