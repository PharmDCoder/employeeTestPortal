import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import * as userService from "../../services/userService";
import auth from "../../services/authService";
import "./signup.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const Signup = () => {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [employeeName, setemployeeName] = useState();
  const [userError, setUserError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data: jwt } = await userService.register({
        email: email,
        password: password,
        employeeName: employeeName
      });

      auth.loginWithJwt(jwt);
      window.location = "/testlist";
    } catch (ex) {
      setUserError(true);
      setErrorMessage(ex.response.data);
    }
  };

  return (
    <div>
      <h2 className="signup-welcome">
        Welcome to the SembraCare Employee Portal!
      </h2>
      <form className="signup-form text-center" onSubmit={handleSubmit}>
        <Container>
          <Row className="signup-form-group">
            <Col size="12">
              <input
                className="signup-form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => setemail(e.target.value)}
              />
              {userError && (
                <div class="alert alert-danger p-1" role="alert">
                  <strong>{errorMessage}</strong>
                </div>
              )}
            </Col>
          </Row>
          <Row className="signup-form-group">
            <Col size="12">
              <input
                className="signup-form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="signup-form-group">
            <Col size="12">
              <input
                className="signup-form-control"
                type="text"
                placeholder="First Name"
                name="employeeName"
                onChange={e => setemployeeName(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn-submit-signup" type="submit">
            Submit
          </button>
        </Container>
        {/* <Container className="mt-4 personalized-greeting">
          <h3>Hello {employeeName}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container> */}
      </form>
    </div>
  );
};

export default Signup;
