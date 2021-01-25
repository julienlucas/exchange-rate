import { render, screen } from "../../test-utils";
import { ExchangeRate } from "../ExchangeRate";

test("renders title", () => {
  render(<ExchangeRate />);
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});
