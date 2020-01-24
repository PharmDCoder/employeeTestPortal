import React, { useEffect, useState } from "react";
import "./testLanding.css";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import { Link } from "react-router-dom";

const TestLanding = ({ location, currentTests, user }) => {
  const [currentTest, setCurrentTest] = useState();

  useEffect(() => {
    try {
      let testLoad = currentTests.filter(test => {
        return test._id === location.state.testid;
      });

      setCurrentTest(testLoad[0]);
    } catch (ex) { }
  }, []);

  return (
    <Container>
      <Row>
        {currentTest && (
          <Col size="12">
            <h2 className="text-center">{currentTest.testName}</h2>
            <hr />
          </Col>
        )}
      </Row>
      <Row>
        {currentTest && (
          <Col size="12">
            <p className="text-center">Test Instructions and other stuff</p>
            <hr />
          </Col>
        )}
      </Row>
      <Row>
        <Col size="12">
          <Link to={{ pathname: "/test", state: { test: currentTest } }} className="btnLink">
            <button className="btn btn-primary">
              Start Test
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TestLanding;
