import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import * as userService from '../../services/userService';
import auth from "../../services/authService"

const Signup = () => {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [employeeName, setemployeeName] = useState();

  // useEffect(() => {
  // }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: jwt } = await userService.register({"email":email,"password":password,"employeeName":employeeName});
      auth.loginWithJwt(jwt);
      window.location = "/";
    } catch (ex) {
      if (ex.response) {
        alert(ex.response.data)
      }
    }
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Welcome to the SembraCare Employee Portal!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="email"
                name="email"
                onChange={e => setemail(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="employeeName"
                onChange={e => setemployeeName(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {email}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
