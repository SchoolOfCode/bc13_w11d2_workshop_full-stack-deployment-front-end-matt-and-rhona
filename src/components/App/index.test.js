import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./index";

test("loads and displays greeting and buttons", async () => {
  render(<App />);
  screen.debug();
  //ACT
  await screen.findByRole("heading");

  //ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent(
    "What would you like for Christmas?"
  );
});

test("Two buttons on the App page", async () => {
  render(<App />);
  await screen.findAllByRole("button");
  expect(screen.getAllByRole("button")).toHaveLength(2);
});
