import React from "react";
import WatchListItem from "../WatchListItem";

import renderer from "react-test-renderer";

test("WatchListItem renders correctly", () => {
  const tree = renderer
    .create(<WatchListItem catname catfathername avWinloss avPrice_sq />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
