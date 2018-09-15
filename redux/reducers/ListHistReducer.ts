import { IHistory } from "../../models/models";
import { IListHistAction, LIST_HIST } from "../actions/ListHistoryActions";

export interface IListHistState {
  historylist: IHistory[];
}

const initialState = {
  historylist: []
};

export function ListHistReducer(
  state: IListHistState = initialState,
  action: IListHistAction
) {
  switch (action.type) {
    case LIST_HIST:
      return { historylist: action.histories };
  }

  return state;
}
