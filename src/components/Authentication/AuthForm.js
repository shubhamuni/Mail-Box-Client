import { Fragment, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authAction } from "../../store/Auth";
import { loginAction } from "../../store/login";
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const handleToken = (token) => {
    dispatch(loginAction.saveToken(token));
    setTimeout(() => {
      dispatch(loginAction.removeToken(null));
      dispatch(authAction.logout());
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }, 1000 * 60 * 10);
  };

  const switchAuthModeHandler = () => {
    // For swicthing between create account and login with existing account
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value; //Takes the input from authentication form
    const enteredPassword = passwordInputRef.current.value; //Takes the input from authentication
    localStorage.setItem("email", enteredEmail);
    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTRcoSUSAZmbscuDU2SdFf7KsMyD4oxvM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTRcoSUSAZmbscuDU2SdFf7KsMyD4oxvM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true, // For logging we require these keys
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Invalid Credentials";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        //Login token saved to context
        handleToken(data.idToken);
        dispatch(authAction.login());
        // send the page to Homepage if successfully logged in
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  let content = isLogin ? "Login" : "Create Account";
  if (isLoading) {
    content = <p>Sending request.....</p>;
    //when the user clicks on login/create account then appears
  }

  return (
    <Fragment>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email"> Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          {isLogin && (
            <Link
              to="/resetpassword"
              style={{ textDecoration: "none", color: "black" }}
              className={classes.toggle}
              onClick={props.onShow}
            >
              Forget password?
            </Link>
          )}
          {!isLogin && (
            <div className={classes.control}>
              <label htmlFor="confirm password">Confirm Password</label>
              <input
                type="password"
                id="confirm password"
                required
                ref={passwordInputRef}
              />
            </div>
          )}
          <div className={classes.actions}>
            <button>
              {isLoading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {content}
            </button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default AuthForm;
