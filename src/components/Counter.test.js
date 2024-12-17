import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("displays the correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = screen.getByTestId("count").textContent;
    expect(Number(countValue)).toEqual(0);
  });
});
