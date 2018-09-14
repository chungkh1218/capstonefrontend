import {
  IGetImgAction,
  LIST_HIST_IMG
} from "../actions/ListHistoryActions";


export interface IListHistImgState {
  imgurl: string;
}

const initialState = {
  imgurl: ""
};

export function GetImgReducer(
  state: IListHistImgState = initialState,
  action: IGetImgAction
) {
  switch (action.type) {
    case LIST_HIST_IMG:
      return { imgurl: action.url };
  }

  return state;
}


