import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";

import CreateMarket from "./CreateMarket.js";

afterEach(rtl.cleanup);

describe("<CreateMarket /> content", () => {
  it("renders the page title of Register A Market", () => {
    const formTitle = rtl.render(<h1>Register A Market</h1>);
    expect(formTitle.getByText(/Register A Market/i));
  });

  it("renders the choose file label tag and text", () => {
    const uploadLabel = rtl.render(
      <label
        htmlFor="upload-button"
        style={{
          cursor: "pointer"
        }}
      >
        Choose file
      </label>
    );
    expect(uploadLabel.getByText(/Choose file/i));
  });
});
