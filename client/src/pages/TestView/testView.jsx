import React, { useEffect, useState } from "react";
import "./testView.css";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const TestView = ({ location, currentTests, user }) => {
  const [currentTest, setCurrentTest] = useState();
  const [testRecord, setTestRecord] = useState();

  useEffect(() => {
    try {
      let testLoad = currentTests.filter(test => {
        return test._id === location.state.testid;
      });
      setCurrentTest(testLoad[0]);

      let currentTestRecord = user.testrecord.filter(test => {
        return test.testID === location.state.testid;
      });
      setTestRecord(currentTestRecord)

      console.log(testLoad)
      console.log(currentTestRecord)
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

        </Col>
      </Row>
    </Container>
  );
};

export default TestView;
