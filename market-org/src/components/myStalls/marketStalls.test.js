import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";

import marketStalls from "./marketStalls.js";

afterEach(rtl.cleanup);

describe("<marketStalls /> content", () => {
  it("renders the label of Stall Dimensions", () => {
    const stallDimensionLabel = rtl.render(<h3>Stall Dimensions </h3>);
    expect(stallDimensionLabel.getByText(/Stall Dimensions/i));
  });

  it("renders the label of Stall Price", () => {
    const priceLabel = rtl.render(<h3>price</h3>);
    expect(priceLabel.getByText(/price/i));
  });
});
