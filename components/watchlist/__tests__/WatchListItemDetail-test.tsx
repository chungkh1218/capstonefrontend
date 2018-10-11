import React from "react";
import WatchListItemDetail from "../WatchListItemDetail";

import renderer from "react-test-renderer";

test("WatchListItemDetail renders correctly", () => {
  const tree = renderer
    .create(<WatchListItemDetail navigator re_id address />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
