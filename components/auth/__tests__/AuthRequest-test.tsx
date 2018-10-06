import React from "react";
import AuthRequest from "../AuthRequest";

import renderer from "react-test-renderer";

test("AuthRequest renders correctly", () => {
  const tree = renderer.create(<AuthRequest navigator />).toJSON();
  expect(tree).toMatchSnapshot();
});
