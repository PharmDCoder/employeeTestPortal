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
      console.log(testLoad[0]);
      setCurrentTest(testLoad[0]);
    } catch (ex) {}
  }, []);

  return (
    <Container>
      <Row className="text-center">
        {currentTest && (
          <Col size="12">
            <img
              className="img-fluid"
              src={require("../../images/" + currentTest.testImage)}
              alt="test image"
            ></img>
            <hr />
          </Col>
        )}
      </Row>
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
            <h4 className="text-center">Test Instructions</h4>
            <ul className="bg-white">
              <li>This is an Open Book Test</li>
              <li>
                Swipe Right to View the Test Screen and Left to View the Handout
                (You can Toggle Between the Two Screens Throughout the Exam).
              </li>
              <li>There are 10 Questions</li>
              <li>You Must Answer 7 Correct to Pass</li>
              <li>
                At the End of the Exam, Sign Your Name in the Signature Box to
                Post Your Results
              </li>
            </ul>
            <hr />
          </Col>
        )}
      </Row>
      <Row>
        <Col size="12">
          <Link
            to={{ pathname: "/test", state: { test: currentTest } }}
            className="btnLink"
          >
            <button className="btn btn-primary">Start Test</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TestLanding;
