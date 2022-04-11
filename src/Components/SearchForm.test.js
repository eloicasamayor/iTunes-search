import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { katy } from "../testing-data/katy";
import { SearchForm } from "./SearchForm";

test("clicking the submit button calls event handler once", () => {
  const loading = false;
  const inputRef = null;

  const mockHandler = jest.fn();
  const component = render(
    <SearchForm
      loading={loading}
      inputRef={inputRef}
      submitSearch={mockHandler}
    />
  );

  const button = component.getByTestId("SearchIcon");
  fireEvent.click(button);

  expect(mockHandler).toHaveBeenCalledTimes(1);
});
