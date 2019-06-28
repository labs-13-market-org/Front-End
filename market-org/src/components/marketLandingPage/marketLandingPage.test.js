import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";

import marketLandingPage from "./marketLandingPage.js";

afterEach(rtl.cleanup);

describe("<marketLandingPage /> content", () => {
  it("renders the page title of Add A Product", () => {
    const pageTitle = rtl.render(<h2>Available Markets</h2>);
    expect(pageTitle.getByText(/Available Markets/i));
  });
});
