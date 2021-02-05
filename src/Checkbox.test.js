import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { Checkbox } from "./Checkbox"

test ("Select checkbox", () => {
    const { getByLabelText } = render (<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})