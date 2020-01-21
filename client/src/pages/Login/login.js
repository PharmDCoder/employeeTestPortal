import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import auth from "../../services/authService"
import './login.css';

const Login = () => {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();

  // useEffect(() => {
  // }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await auth.login(email, password);
 
      if (userResponse) {
        alert(userResponse);
      } else {
        window.location = "/";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  return (
    <div>
      <div className="mt-4 welcome">
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
          <button className="btn" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4 personalized-greeting">
          <h3>Hello {email}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default Login;
