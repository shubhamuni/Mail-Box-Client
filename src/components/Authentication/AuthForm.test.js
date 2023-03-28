import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthForm from "./AuthForm";

describe("Authentication Form Component", () => {
  test("renders login page when create new account was not Clicked", () => {
    //Arrange
    render(<AuthForm />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const loginButton = screen.getByText("Login", { exact: false });
    expect(loginButton).toBeInTheDocument();
  });
});
