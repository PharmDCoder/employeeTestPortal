import React, { useEffect, useState } from "react";
import "./testLanding.css";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import { Link } from "react-router-dom";
import { FaRegHandPointLeft } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";
import { IconContext } from "react-icons";

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
  });

  return (
    <Container>
      <Row className="text-center">
        {currentTest && (
          <Col size="12">
            <img
              className="img img"
              src={require("../../images/" + currentTest.testImage)}
              alt="test image"
            ></img>
            {/* <hr /> */}
          </Col>
        )}
      </Row>
        {currentTest && (
            <h2 className="text-center test-landing-title">{currentTest.testName}</h2>
        )}
      <IconContext.Provider
        value={{ color: "blue", size: "2em", className: "global-class-name" }}
      >
        <Row>
          {currentTest && (
            <Col size="12" className="instructions-container">
              <h4 className="text-center">Test Instructions</h4>
              <ul className="bg-white instructions-ul">
                <li>This is an Open Book Test</li>
                <li>
                  Swipe Left <FaRegHandPointLeft /> to View the Test Screen
                </li>
                <li>
                  Swipe Right <FaRegHandPointRight /> to View the Handout
                </li>
                <p className="font-weight-bold font-italic">
                  (You can Toggle Between the Two Screens Throughout the Exam)
                </p>
                <li>There are 10 Questions</li>
                <li>You Must Answer 7 Correct to Pass</li>
                <li>
                  At the End of the Exam, Sign Your Name in the Signature Box to
                  Post Your Results
                </li>
              </ul>
              {/* <hr /> */}
            </Col>
          )}
        </Row>
      </IconContext.Provider>
      <Row>
        <Col size="12">
          <Link
            to={{ pathname: "/test", state: { test: currentTest } }}
            className="btnLink"
          >
            <button className="btn btn-primary test-start-button">Start Test</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TestLanding;
