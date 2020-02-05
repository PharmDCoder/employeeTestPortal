import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import auth from "../../services/authService";
import "./login.css";
// import '../Signup/signup.css';

const Login = () => {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  // }, [search]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userResponse = await auth.login(email, password);

      if (userResponse) {
        setErrorMessage(userResponse);
        if (userResponse === "User Not Found") {
          setLoginError(true);
          setPasswordError(false);
        } else if (userResponse === "Wrong Password for this user") {
          setLoginError(false);
          setPasswordError(true);
        } else {
          setLoginError(true);
          setPasswordError(true);
        }
      } else {
        window.location = "/testlist";
      }
    } catch (ex) {
      //set error to ex
      setErrorMessage(ex);
    }
  };

  return (
    <div>
      <div className="login-welcome">
        <h2>Welcome to the SembraCare Employee Portal!</h2>
      </div>
      <form className="login-form text-center" onSubmit={handleSubmit}>
        <Container>
          <Row className="login-form-group">
            <Col size="12">
              <input
                className="login-form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => setemail(e.target.value)}
              />
              {loginError && (
                <div class="alert alert-danger p-1" role="alert">
                  <strong>{errorMessage}</strong>
                </div>
              )}
            </Col>
          </Row>
          <Row className="login-form-group">
            <Col size="12">
              <input
                className="login-form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
              {passwordError && (
                <div class="alert alert-danger p-1" role="alert">
                  <strong>{errorMessage}</strong>
                </div>
              )}
            </Col>
          </Row>
          <button className="btn-submit-login" type="submit">
            Submit
          </button>
        </Container>
        {/* <Container className="mt-4 personalized-greeting">
          <h3>Hello {email}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container> */}
      </form>
    </div>
  );
};

export default Login;
