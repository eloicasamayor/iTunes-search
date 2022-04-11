import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { katy } from "../testing-data/katy";
import { ResultsGrid } from "./ResultsGrid";

test("renders content", () => {
  const component = render(<ResultsGrid searchResults={katy} />);

  component.getAllByText("Katy Perry");
  component.getAllByText("PRISM (Deluxe Version)");
  component.getAllByText("Dark Horse (feat. Juicy J)");
});
