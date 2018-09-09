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

export function AddWatchItems() {
  // Do an Axios call
  return (dispatch: Dispatch<any>) => {
    dispatch(AddWatchListItems());
  };
}

export function ListWatchItems() {
  // Do an Axios call
  return (dispatch: Dispatch<any>) => {
    dispatch(ListWatchListItems());
  };
}

export function RemoveWatchItems() {
  // Do an Axios call
  return (dispatch: Dispatch<any>) => {
    dispatch(RemoveWatchListItems());
  };
}
