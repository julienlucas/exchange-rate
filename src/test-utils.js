import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

const reduxRender = (ui, options) =>
  render(ui, { wrapper: ReduxProvider }, ...options);

export * from "@testing-library/react";

export { reduxRender as render };