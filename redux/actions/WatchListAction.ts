import { Dispatch } from "redux";
import axios from "axios";
import Config from "react-native-config";

export const ADD_WATCH_ITEM = "ADD_WATCH_ITEM";
export type ADD_WATCH_ITEM = typeof ADD_WATCH_ITEM;

export const LIST_WATCH_ITEM = "LIST_WATCH_ITEM";
export type LIST_WATCH_ITEM = typeof LIST_WATCH_ITEM;

export const REMOVE_WATCH_ITEM = "REMOVE_WATCH_ITEM";
export type REMOVE_WATCH_ITEM = typeof REMOVE_WATCH_ITEM;

export interface AddWatchItemAction {
  type: ADD_WATCH_ITEM;
}

export interface ListWatchItemAction {
  type: LIST_WATCH_ITEM;
}

export interface RemoveWatchItemAction {
  type: REMOVE_WATCH_ITEM;
}

export type watchListAction =
  | AddWatchItemAction
  | ListWatchItemAction
  | RemoveWatchItemAction;

function AddWatchListItems(): AddWatchItemAction {
  return {
    type: ADD_WATCH_ITEM
  };
}

function ListWatchListItems(): ListWatchItemAction {
  return {
    type: LIST_WATCH_ITEM
  };
}

function RemoveWatchListItems(): RemoveWatchItemAction {
  return {
    type: REMOVE_WATCH_ITEM
  };
}

export function AddWatchItems(userId: number, reId: number) {
  return (dispatch: Dispatch<any>) => {
    console.log("AddWatchItems");
    return axios
      .post(`${Config.API_URL}/addflat/${userId}/${reId}`)
      .then(res => {
        dispatch(AddWatchListItems());
      })
      .catch(err => console.log("Error: ", err));
  };
}

export function ListWatchItems(userId: number) {
  return (dispatch: Dispatch<any>) => {
    console.log("ListWatchItems");
    return axios
      .get(`${Config.API_URL}/listfavflat/${userId}`)
      .then(res => {
        dispatch(ListWatchListItems());
      })
      .catch(err => console.log("Error: ", err));
  };
}

export function RemoveWatchItems(userId: number, reId: number) {
  return (dispatch: Dispatch<any>) => {
    console.log("RemoveWatchItems");
    return axios
      .delete(`${Config.API_URL}/deleflat/${userId}/${reId}`)
      .then(res => {
        dispatch(RemoveWatchListItems());
      })
      .catch(err => console.log("Error: ", err));
  };
}
