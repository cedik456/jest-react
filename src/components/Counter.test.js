import { render } from "react-dom";
import Counter from "./Counter";

describe("Counter", () => {
  it("Counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    expect(getByTestId("counter-value")).toHaveTextContent("0");
  });
});
