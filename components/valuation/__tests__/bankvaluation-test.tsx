import React from "react";
import BankValuation from "../bankvaluation";

import renderer from "react-test-renderer";

test("BankValuation renders correctly", () => {
  const tree = renderer.create(<BankValuation navigator />).toJSON();
  expect(tree).toMatchSnapshot();
});
