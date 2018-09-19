import { IHistory } from "../../models/models";
import { IListHistAction, LIST_HIST } from "../actions/ListHistoryActions";

export interface IListHistState {
  isLoading1:boolean;
  historylist: IHistory[];
}

const initialState = {
  isLoading1:false,
  historylist: []
};

export function ListHistReducer(
  state: IListHistState = initialState,
  action: IListHistAction
) {
  switch (action.type) {
    case LIST_HIST:
      return { historylist: action.histories,
              isLoading1:false };
  }

  return state;
}
