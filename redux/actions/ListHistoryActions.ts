import axios from "axios";
import { Dispatch } from "redux";
import { IHistory } from "../../models/models";
import Config from 'react-native-config'

export const LIST_HIST = "LIST_HIST";
export const LIST_HIST_IMG = "LIST_HIST_IMG";
export type LIST_HIST = typeof LIST_HIST;
export type LIST_HIST_IMG = typeof LIST_HIST_IMG;

export interface IListHistAction {
  type: LIST_HIST;
  histories: IHistory[];
 

}

export interface IGetImgAction{
  type:LIST_HIST_IMG;
  url:string
}

export function ListHistAction(histories: IHistory[]): IListHistAction {
  return {
    histories,
    type: LIST_HIST
  };
}

export function GetImgAction(url: string): IGetImgAction{
  return {
    url,
    type: LIST_HIST_IMG
  }
}

export function ListHistFromAPIAction(param: string) {
  return (dispatch: Dispatch<IListHistAction | any>) => {
    dispatch(GetImgFromAPIAction(param));
    axios
      .get(`${Config.API_URL}/api/estate/estate/${param}`)
      .then(res => {
        console.log(res)
        dispatch(ListHistAction(res.data));
      })
      .catch(err => console.log("uh oh error", err));
  };
}



export function GetImgFromAPIAction(param:string){
  return(dispatch:Dispatch<IGetImgAction>)=>{

        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${param}&key=AIzaSyCbIPnpE6M8ULjaI_K0JRMb7B9vrf1WH3Y`;
        console.log(url)
        fetch(url)
          .then(res => res.json())
          .then(resTxt => {
            // console.log(resTxt.results[0]);
            const photoreference = resTxt.results[0].hasOwnProperty('photos') ? resTxt.results[0].photos[0].photo_reference: null;
            const imageLink = photoreference ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoreference}&key=AIzaSyAWhKz6APT6ExkjDLpvmvKfBNpSlx983yk` : "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?cs=srgb&dl=ask-blackboard-356079.jpg&fm=jpg";
            // console.log(photoreference);
            const imgurl = imageLink;
            console.log(imgurl)
            return {url:imgurl};
            
          })
          .then(img => {
            dispatch(GetImgAction(img.url));
          })
          .catch(err => {
            console.log("Error: " + err);
          });
  }
}