import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";

import vendorStalls from "./vendorStalls.js";

afterEach(rtl.cleanup);

describe("<vendorStalls /> content", () => {
  it("renders the title label of main content", () => {
    const mainLabel = rtl.render(
      <center>My Currently Purchased Stalls: </center>
    );
    expect(mainLabel.getByText(/My Currently Purchased Stalls:/i));
  });

  it("renders the label of Market Name", () => {
    const marketNameLabel = rtl.render(<h3>Market Name</h3>);
    expect(marketNameLabel.getByText(/Market Name/i));
  });

  it("renders the Dimensions label", () => {
    const dimensionsLabel = rtl.render(<h3>Dimensions</h3>);
    expect(dimensionsLabel.getByText(/Dimensions/i));
  });

  it("renders the Price label", () => {
    const priceLabel = rtl.render(<h3>Price</h3>);
    expect(priceLabel.getByText(/Price/i));
  });
});
