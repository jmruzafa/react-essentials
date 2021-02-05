import {render } from "@testing-library/react";
import React from "react";
import App from "./App";

test ("render an h2", () => {
    const { getByText } = render(<App />);
    const h2 = getByText(/Hello React Testing Library/);
    expect(h2).toHaveTextContent("Hello React Testing Library");
})

