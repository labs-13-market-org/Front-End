import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";

import VendorForm from "./VendorForm.js";

afterEach(rtl.cleanup);

describe("<VendorForm /> content", () => {
  it("renders the title of Register a vendor ", () => {
    const wrapper = rtl.render(<h2>Register A Vendor</h2>);
  });

  it("renders the choose file label tag and text", () => {
    const uploadLabel = rtl.render(
      <label
        htmlFor="upload-button"
        style={{
          cursor: "pointer",
          fontSize: 16,
          background: "rgba(180, 45, 90)",
          color: "white",
          padding: "5px",
          borderRadius: "5px"
        }}
      >
        Choose file
      </label>
    );
    expect(uploadLabel.getByText(/Choose file/i));
  });
});
