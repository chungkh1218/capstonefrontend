import { Dispatch } from "redux";
import axios from "axios";
import Config from "react-native-config";
import { IWatchList } from "../../models/models";
import { AsyncStorage } from "react-native";

export const ADD_WATCH_ITEM = "ADD_WATCH_ITEM";
export type ADD_WATCH_ITEM = typeof ADD_WATCH_ITEM;

export const LIST_WATCH_ITEM = "LIST_WATCH_ITEM";
export type LIST_WATCH_ITEM = typeof LIST_WATCH_ITEM;

export const REMOVE_WATCH_ITEM = "REMOVE_WATCH_ITEM";
export type REMOVE_WATCH_ITEM = typeof REMOVE_WATCH_ITEM;

export interface AddWatchItemAction {
  type: ADD_WATCH_ITEM;
  watchList: IWatchList[];
}

export interface ListWatchItemAction {
  type: LIST_WATCH_ITEM;
  watchList: IWatchList[];
}

export interface RemoveWatchItemAction {
  type: REMOVE_WATCH_ITEM;
  watchList: IWatchList[];
}

export type watchListAction =
  | AddWatchItemAction
  | ListWatchItemAction
  | RemoveWatchItemAction;

export function AddWatchListItems(watchList: IWatchList[]): AddWatchItemAction {
  return {
    watchList,
    type: ADD_WATCH_ITEM
  };
}

export function ListWatchListItems(
  watchList: IWatchList[]
): ListWatchItemAction {
  return {
    watchList,
    type: LIST_WATCH_ITEM
  };
}

export function RemoveWatchListItems(
  watchList: IWatchList[]
): RemoveWatchItemAction {
  return {
    watchList,
    type: REMOVE_WATCH_ITEM
  };
}

export function AddWatchItems(reId: number) {
  console.log("Step 1: " + reId);
  return (dispatch: Dispatch<any>) => {
    console.log("Step 2: " + reId);
    AsyncStorage.getItem("token")
      .then(token => {
        console.log("token: " + token);
        return axios
          .post(`${Config.API_URL}/api/fav/addflat/${reId}`, {
            headers: {
              Authorization: "Bearer " + token
            }
          })
          .then(res => {
            dispatch(AddWatchListItems(res.data));
          });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
}

export function ListWatchItems() {
  return (dispatch: Dispatch<any>) => {
    console.log("ListWatchItems");
    AsyncStorage.getItem("token")
      .then(token => {
        console.log("token: " + token);
        return axios
          .get(`${Config.API_URL}/api/fav/watchlist/`, {
            headers: {
              Authorization: "Bearer " + token
            }
          })
          .then(res => {
            dispatch(ListWatchListItems(res.data));
          });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
}

export function RemoveWatchItems(reId: number) {
  return (dispatch: Dispatch<any>) => {
    console.log("RemoveWatchItems");
    AsyncStorage.getItem("token")
      .then(token => {
        console.log("token: " + token);
        return axios
          .delete(`${Config.API_URL}/api/fav/deleflat/${reId}`, {
            headers: {
              Authorization: "Bearer " + token
            }
          })
          .then(res => {
            dispatch(RemoveWatchListItems(res.data));
          });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
}
