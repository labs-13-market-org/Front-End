import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";

import ProductForm from "./ProductForm.js";

afterEach(rtl.cleanup);

describe("<ProductForm /> behavior", () => {
  it("renders the page title of Add A Product", () => {
    const pageTitle = rtl.render(<h2>Add A Product</h2>);
    expect(pageTitle.getByText(/Add A Product/i));
  });

  it("renders a form element of Product name", () => {
    const productName = rtl.render(<h4>Product Name</h4>);
    expect(productName.getByText(/Product Name/i));
  });

  it("renders a form element of Product description", () => {
    const productDescription = rtl.render(<h4>Description</h4>);
    expect(productDescription.getByText(/Description/i));
  });

  it("renders a form element of Product description", () => {
    const productPrice = rtl.render(<h4>Price</h4>);
    expect(productPrice.getByText(/Price/i));
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
          borderRadius: "5px",
          margin: "10px"
        }}
      >
        Choose file
      </label>
    );
    expect(uploadLabel.getByText(/Choose file/i));
  });
});
