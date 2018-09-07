import axios from "axios";
import { Dispatch } from "redux";
import { IHistory } from "../../models/models";
import Config from 'react-native-config'

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
      .get(`${Config.API_URL}/api/estate/estate/${param}`)
      .then(res => {
        dispatch(ListHistAction(res.data));
      })
      .catch(err => console.log("uh oh error", err));
  };
}
