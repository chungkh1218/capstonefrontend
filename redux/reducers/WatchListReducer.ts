import {
  watchListAction,
  ADD_WATCH_ITEM,
  LIST_WATCH_ITEM,
  REMOVE_WATCH_ITEM
} from "../actions/WatchListAction";
import { IWatchList } from "../../models/models";

export interface WatchListState {
  watchList: IWatchList[];
}

// Reducer's State
const initialState = {
  watchList: []
};

// Change Reducer's State Based on Action
export function WatchListReducer(
  state: WatchListState = initialState,
  action: watchListAction
) {
  switch (action.type) {
    case ADD_WATCH_ITEM:
      console.log("Add Watch Item!");
      return {
        ...state,
        watchList: action.watchList
      };
    case LIST_WATCH_ITEM:
      console.log("List Watch Item!");
      return {
        watchList: action.watchList
      };
    case REMOVE_WATCH_ITEM:
      console.log("Remove Watch Item!");
      return {
        ...state,
        watchList: action.watchList
      };

    default:
      return state;
  }
}
