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

const initialState = {
  watchList: []
};

export function WatchListReducer(
  state: WatchListState = initialState,
  action: watchListAction
) {
  switch (action.type) {
    // Add a watch item
    case ADD_WATCH_ITEM:
      console.log("Add Watch Item!");
      return {
        ...state,
        watchList: action.watchList
        // watchList: state.watchList.concat(action.watchList)
      };
    // Update the watch list
    case LIST_WATCH_ITEM:
      console.log("List Watch Item!");
      return {
        watchList: action.watchList
      };
    // Remove a watch item
    case REMOVE_WATCH_ITEM:
      console.log("Remove Watch Item!");
      return {
        ...state,
        watchList: action.watchList
        // watchList: state.watchList.concat(action.watchList)
      };

    default:
      return state;
  }
}
