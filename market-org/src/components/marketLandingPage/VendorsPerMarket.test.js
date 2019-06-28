import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";

import VendorsPerMarket from "./VendorsPerMarket.js";

afterEach(rtl.cleanup);

describe("<VendorsPerMarket /> content", () => {
  it("renders the page title of Market Profile", () => {
    const pageTitle = rtl.render(<h2>Market Profile</h2>);
    expect(pageTitle.getByText(/Market Profile/i));
  });

  it("renders the other page title of Our Vendors", () => {
    const additionalPageTitle = rtl.render(<h3>Our Vendors</h3>);
    expect(additionalPageTitle.getByText(/Our Vendors/i));
  });
});
