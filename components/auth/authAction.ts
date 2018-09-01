import { Dispatch } from "redux";
import axios from "axios";
import { AsyncStorage } from "react-native";
import Config from "react-native-config";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;
export interface LoginSuccessAction {
  type: LOGIN_SUCCESS;
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

function loginSuccess(): LoginSuccessAction {
  return {
    type: LOGIN_SUCCESS
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

export function loginUser(email: string, password: string) {
  console.log(email, password);
  return (dispatch: Dispatch<any>) => {
    return axios
      .post<{ token: string; message?: string }>(
        `http://localhost:8080/api/login`,
        {
          email: email,
          password: password
        }
      )
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure("Unknown Error"));
        } else if (!response.data.token) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginFailure(response.data.message || ""));
        } else {
          // If login was successful, set the token in local storage
          // localStorage.setItem("token", response.data.token);
          AsyncStorage.setItem("token", response.data.token);
          // Dispatch the success action
          console.log("loginSuccess");
          dispatch(loginSuccess());
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
      dispatch(loginSuccess());
      return accessToken;
    };
  }
}
