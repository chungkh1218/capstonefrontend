import {
  authAction,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../actions/AuthAction";
import { IAuthUser } from "../../models/models";

export interface IAuthState {
  user: IAuthUser;
}

// Initial State of AuthState
const initialState = {
  user: {
    username: "username is null",
    email: "email is null",
    user_id: null,
    isAuthenticated: false
  }
};

// Manage State's Changes Based On Different Actions
export function authReducer(
  state: IAuthState = initialState,
  action: authAction
): IAuthState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: {
          ...state.user,
          username: action.username,
          email: action.email,
          isAuthenticated: true
        }
      };
    case LOGIN_FAILURE:
      return {
        user: {
          ...state.user,
          isAuthenticated: false
        }
      };
    case LOGOUT:
      return {
        user: {
          ...state.user,
          isAuthenticated: false
        }
      };
    default:
      return state;
  }
}
