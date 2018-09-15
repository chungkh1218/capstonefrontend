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
        watchList: action.watchList
      };
    // Update the watch list
    case LIST_WATCH_ITEM:
      console.log(action.watchList);
      return {
        watchList: action.watchList
      };
    // Remove a watch item
    case REMOVE_WATCH_ITEM:
      console.log("Remove Watch Item!");
      return {
        watchList: action.watchList
      };

    default:
      return state;
  }
}
