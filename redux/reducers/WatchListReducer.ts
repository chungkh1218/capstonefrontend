import {
  watchListAction,
  ADD_WATCH_ITEM,
  LIST_WATCH_ITEM,
  REMOVE_WATCH_ITEM
} from "../actions/WatchListAction";

export interface WatchListState {
  watchList: Array<{}>;
}

const initialState = {
  watchList: []
};

export function WatchListReducer(
  state: WatchListState = initialState,
  action: watchListAction
) {
  switch (action.type) {
    case ADD_WATCH_ITEM:
      // Add a watch item
      console.log("Add Watch Item!");
      return state;
    case LIST_WATCH_ITEM:
      // Update the watch list
      console.log("List Watch Item!");
      return state;
    case REMOVE_WATCH_ITEM:
      // Remove a watch item
      console.log("Remove Watch Item!");
      return state;
  }
  return state;
}
