import React, { useEffect, useState } from "react";
import "./testView.css";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Moment from "react-moment";

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
      setTestRecord(currentTestRecord[0]);

      console.log(testLoad);
      console.log(currentTestRecord);
    } catch (ex) {}
  });

  return (
    <Container className="summary-container">
      {currentTest && (
        <h2 className="text-center test-title">{currentTest.testName}</h2>
      )}
      <Row className="text-center">
        {currentTest && (
          <Col size="12" className="test-summary">
            {/* <hr /> */}
            <h3 className="text-center">Test Score: {testRecord.testScore}%</h3>
            <h3>
              Completed On:{" "}
              <Moment format="MM/DD/YY">{testRecord.testFinish}</Moment>
            </h3>
            <h3>
              Total Test Time:{" "}
              <Moment diff={testRecord.testStart} unit="m">
                {testRecord.testFinish}
              </Moment>{" "}
              minutes
            </h3>
            <img
              src={testRecord.testSignature}
              alt="signature"
              className="bg-white signature-image"
            />
            {/* <hr /> */}
          </Col>
        )}
      </Row>
      {testRecord && (
        <Row className="text-center">
          <Col size="12" className="test-answer-explanations">
            {testRecord.testQuestionList.map((testQuestion, index) => {
              console.log(testQuestion);
              return (
                <div id="question-explanation">
                  <p>
                    {index + 1} - {testQuestion.testQuestionText}
                  </p>
                  <p>
                    <strong>Correct Answer:</strong>{" "}
                    {testQuestion.testQuestionAnswer}
                  </p>
                  {!testQuestion.testQuestionCorrect && (
                    <p
                      className={
                        !testQuestion.testQuestionCorrect
                          ? "text-danger"
                          : "text-dark"
                      }
                    >
                      <strong>Explanation: </strong>
                      {testQuestion.testQuestionExplanation}
                    </p>
                  )}
                  {/* <hr /> */}
                </div>
              );
            })}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default TestView;
