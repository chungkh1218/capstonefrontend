import React from "react";
import BankValuation from "../bankvaluation";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<BankValuation />).toJSON();
  expect(tree).toMatchSnapshot();
});
