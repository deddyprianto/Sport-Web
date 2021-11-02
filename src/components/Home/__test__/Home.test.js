import { render, screen } from "@testing-library/react";
import Data from "../Data";

describe("test component Data", () => {
  test("should check are we have props", () => {
    render(<Data data="apakah kamu single" />);
    const dataPropsHome = screen.getByTestId("this is a secret id");
    expect(dataPropsHome).toBeInTheDocument();
  });
  // find by
  test("should check are we have props", async () => {
    render(<Data data="apakah kamu single" />);
    const dataPropsHome = await screen.findByTestId("this is a secret id");
    expect(dataPropsHome).toBeInTheDocument();
  });

  // query by
  test("should check are we have props", () => {
    render(<Data data="apakah kamu single" />);
    const dataPropsHome = screen.queryByText("damamr");
    expect(dataPropsHome).not.toBeInTheDocument();
  });
  // we try used all ans should produce a result
  // if you want
  test.only("should check are we have 2 paragraph", () => {
    render(<Data data="apakah kamu single" />);
    const dataPropsHomes = screen.getAllByRole("heading");
    expect(dataPropsHomes.length).toBe(2);
  });
  // test a link components
  test.only("should render link in component to be Corected", () => {
    render(<Data data="should render one compent inside a dat" />);
    const dataBind = screen.getByText("should render one compent inside a dat");
    expect(dataBind).toContainHTML("p");
  });
});
