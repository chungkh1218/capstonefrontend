import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore from "redux-mock-store";

import AuthRequest from "../../components/auth/AuthRequest";
import WatchListList from "../../components/watchlist/WatchListList";

configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  navigator: "",
  watchList: {
    re_id: 0,
    address: [
      {
        catname: "",
        catfathername: "",
        avWinloss: 0,
        avPrice_sq: ""
      }
    ]
  }
};

describe("WatchList Tab Testing", function() {
  it("Testing AuthRequest Props", () => {
    const wrapper = shallow(<AuthRequest navigator />).props();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders as expected", () => {
    const wrapper = shallow(
      <WatchListList
        navigator
        watchList={{
          re_id: 1,
          address: [
            {
              catname: "ACB Building",
              catfathername: "Kung Tong",
              avWinloss: 100,
              avPrice_sq: "3888"
            }
          ]
        }}
      />,
      {
        context: { store: mockStore(initialState) }
      }
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
