import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { katy } from "../testing-data/katy";
import { ResultsList } from "./ResultsList";

test("renders content", () => {
  const component = render(<ResultsList searchResults={katy} />);

  component.getAllByText("Katy Perry");
  component.getAllByText("PRISM (Deluxe Version)");
  component.getAllByText("Dark Horse (feat. Juicy J)");
});
