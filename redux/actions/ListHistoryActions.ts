import axios from "axios";
import { Dispatch } from "redux";
import { IHistory } from "../../models/models";

export const LIST_HIST = "LIST_HIST";
export type LIST_HIST = typeof LIST_HIST;

export interface IListHistAction {
  type: LIST_HIST;
  histories: IHistory[];
}

export function ListHistAction(histories: IHistory[]): IListHistAction {
  return {
    histories,
    type: LIST_HIST
  };
}

export function ListHistFromAPIAction(param: string) {
  return (dispatch: Dispatch<IListHistAction>) => {
    axios
      .get(`http://localhost:8080/api/estate/estate/${param}`)
      .then(res => {
        dispatch(ListHistAction(res.data));
      })
      .catch(err => console.log("uh oh error", err));
  };
}
