import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";

import VendorLandingPage from "./VendorLandingPage.js";

afterEach(rtl.cleanup);

describe("<VendorLandingPage /> behavior", () => {
  it("renders the Vendors title", () => {
    const title = rtl.render(<h2>Vendors</h2>);
    expect(title.getByText(/Vendors/i));
  });
});
