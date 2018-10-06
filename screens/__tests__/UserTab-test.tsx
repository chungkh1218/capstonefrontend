import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore from "redux-mock-store";

import UserProfile from "../../components/auth/UserProfile";
import AuthRequest from "../../components/auth/AuthRequest";

configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  navigator: "",
  user: {}
};

describe("User Tab Testing", function() {
  it("Testing AuthRequest Props", () => {
    const wrapper = shallow(<AuthRequest navigator />).props();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders as expected", () => {
    const wrapper = shallow(
      <UserProfile
        navigator
        user={{
          username: "peter",
          email: "pet@pet.com",
          user_id: 1,
          isAuthenticated: true
        }}
      />,
      {
        context: { store: mockStore(initialState) }
      }
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
