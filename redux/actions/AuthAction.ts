import { Dispatch } from "redux";
import axios from "axios";
import { AsyncStorage } from "react-native";
import Config from "react-native-config";
import { ListWatchItems } from "./WatchListAction";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;
export interface LoginSuccessAction {
  type: LOGIN_SUCCESS;
  username: string;
  email: string;
}

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export type LOGIN_FAILURE = typeof LOGIN_FAILURE;
export interface LoginFailureAction {
  type: LOGIN_FAILURE;
  message: string;
}

export const SWITCH_AUTHSTATUS = "SWITCH_AUTHSTATUS";
export type SWITCH_AUTHSTATUS = typeof SWITCH_AUTHSTATUS;
export interface SwitchAuthStatusAction {
  type: SWITCH_AUTHSTATUS;
}

export const LOGOUT = "LOGOUT";
export type LOGOUT = typeof LOGOUT;
export interface LogOutAction {
  type: LOGOUT;
}

export type authAction =
  | LoginSuccessAction
  | LoginFailureAction
  | LogOutAction
  | SwitchAuthStatusAction;

function loginSuccess(username: string, email: string): LoginSuccessAction {
  return {
    type: LOGIN_SUCCESS,
    username: username,
    email: email
  };
}

function loginFailure(message: string): LoginFailureAction {
  return {
    type: LOGIN_FAILURE,
    message: message
  };
}

function logOutAction(): LogOutAction {
  return {
    type: LOGOUT
  };
}

// Functions' Definition
export function signUpUser(
  name: string,
  email: string,
  phone: string,
  password: string,
  special_user: boolean
) {
  console.log("Username: " + name);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
  console.log("Password: " + password);
  console.log("Special_User: " + special_user);
  return (dispatch: Dispatch<any>) => {
    return axios
      .post<{ token: string; message?: string; name: string; email: string }>(
        `${Config.API_URL}/api/register`,
        {
          name: name,
          email: email,
          phone: phone,
          password: password,
          special_user: special_user
        }
      )
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure("Unknown Error"));
        } else if (!response.data.token) {
          dispatch(loginFailure(response.data.message || ""));
        } else {
          AsyncStorage.setItem("token", response.data.token);
          console.log("Username: " + response.data.name);
          console.log("Email: " + response.data.email);
          console.log("loginSuccess");
          dispatch(ListWatchItems());
          dispatch(loginSuccess(response.data.name, response.data.email));
        }
      })
      .catch(err => console.log("Error: ", err));
  };
}

export function loginUser(email: string, password: string) {
  console.log("Email: " + email);
  console.log("Password: " + password);
  return (dispatch: Dispatch<any>) => {
    return axios
      .post<{ token: string; message?: string; name: string; email: string }>(
        `${Config.API_URL}/api/login`,
        {
          email: email,
          password: password
        }
      )
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure("Unknown Error"));
        } else if (!response.data.token) {
          dispatch(loginFailure(response.data.message || ""));
        } else {
          AsyncStorage.setItem("token", response.data.token);
          console.log("Username: " + response.data.name);
          console.log("Email: " + response.data.email);
          console.log("loginSuccess");
          dispatch(ListWatchItems());
          dispatch(loginSuccess(response.data.name, response.data.email));
        }
      })
      .catch(err => console.log("Error: ", err));
  };
}

export function loginFacebook(accessToken: string) {
  console.log("Redux action get access token: " + accessToken);
  return (dispatch: Dispatch<any>) => {
    // dispatch(loginSuccess());
    return axios
      .post<{
        accessToken: string;
        name: string;
        email: string;
        token: string;
        message: string;
      }>(`${Config.API_URL}/api/login/facebook`, {
        access_token: accessToken
      })
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure("Unknown Error"));
        } else if (!response.data.token) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginFailure(response.data.message || ""));
        } else {
          // If login was successful, set the token in local storage
          AsyncStorage.setItem("token", response.data.token);
          // Dispatch the success action
          // dispatch(loginSuccess());
          dispatch(loginSuccess(response.data.name, response.data.email));
        }
      })
      .catch(err => console.log("Error: ", err));
  };
}

export function logoutUser() {
  return (dispatch: Dispatch) => {
    AsyncStorage.removeItem("token").then(() => {
      dispatch(logOutAction());
    });
  };
}

export async function checkToken() {
  const accessToken = await AsyncStorage.getItem("token");
  if (accessToken) {
    return (dispatch: Dispatch) => {
      // dispatch(loginSuccess());
      return accessToken;
    };
  }
}
