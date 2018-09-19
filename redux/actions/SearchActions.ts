import axios from "axios";
import { Dispatch } from "redux";
import { IProperty } from "../../models/models";
import Config from "react-native-config";

export const SERACH_PROP = "SEARCH_PROP";
export type SEARCH_PROP = typeof SERACH_PROP;

export interface ISearchPropAction {
  type: SEARCH_PROP;
  properties: IProperty[];
  isLoading:boolean
}

//noraml action creator
export function SearchPropertyAction(
  properties: IProperty[],isLoading:boolean
): ISearchPropAction {
  console.log();
  return {
    isLoading,
    properties,
    type: SERACH_PROP
  };
}

//thunk action creator
export function SearchPropFromAPIAction(search?: string, condition?: string) {
  return (dispatch: Dispatch<ISearchPropAction>) => {
    console.log(search);
    if (condition === "estate") {
      axios
        .get(
          `${Config.API_URL}/api/estate/infoP/${search}?page=1&numberOfResults=30`
        )
        .then(res => {
          console.log(res);
          dispatch(SearchPropertyAction(res.data,false));
        })
        .catch(err => console.log("uh oh error", err));
    } else {
      axios
        .get(
          `${
            Config.API_URL
          }/api/estate/infoA/${search}?page=1&numberOfResults=30`
        )
        .then(res => {
          dispatch(ModalSearchPropertyAction(res.data));
        })
        .catch(err => console.log("uh oh error", err));
    }
  };
}

export function ModalSearchPropertyAction(
  properties: IProperty[],isLoading:boolean
): ISearchPropAction {
  console.log();
  return {
    isLoading,
    properties,
    type: SERACH_PROP
  };
}

// export function ModalSearchPropFromAPIAction(search: string, condition: string) {
//   return (dispatch: Dispatch<ISearchPropAction>) => {
//     axios
//       .get(`http://localhost:8080/api/estate/infoP/${search}`)
//       .then(res => console.log(res))
//       //   {
//       //   dispatch(ModalSearchPropertyAction(res.data));
//       // })
//       .catch(err => console.log("uh oh error", err));
//   };
// }

// const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${keyWord}&key=AIzaSyAWhKz6APT6ExkjDLpvmvKfBNpSlx983yk`;
// fetch(url)
//   .then(res => res.json())
//   .then(resTxt => {
//     console.log(resTxt.results[0].reference);
//     photoreference = resTxt.results[0].reference;
//     imageLink = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoreference}&key=AIzaSyAWhKz6APT6ExkjDLpvmvKfBNpSlx983yk`;
//     console.log("Image Link: " + imageLink);
//     value = imageLink;
//   })
//   .catch(err => {
//     console.log("Error: " + err);
//   });
