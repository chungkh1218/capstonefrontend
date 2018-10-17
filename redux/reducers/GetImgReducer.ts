import { IGetImgAction, LIST_HIST_IMG } from "../actions/ListHistoryActions";

export interface IListHistImgState {
  imgurl: string;
}

const initialState = {
  imgurl: "https://via.placeholder.com/350x150"
  // "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?cs=srgb&dl=ask-blackboard-356079.jpg&fm=jpg"
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
