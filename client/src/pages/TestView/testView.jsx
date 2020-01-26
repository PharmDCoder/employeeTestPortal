import React, { useEffect, useState } from "react";
import "./testView.css";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Moment from "react-moment"

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
      setTestRecord(currentTestRecord[0])

      console.log(testLoad)
      console.log(currentTestRecord)
    } catch (ex) { }
  }, []);

  return (
    <Container>
      <Row className="text-center">
        {currentTest && (
          <Col size="12" className="text-light">
            <h2 className="text-center">{currentTest.testName}</h2>
            <hr />
            <h3 className="text-center">Test Score: {testRecord.testScore}%</h3>
            <h3>Completed On: {" "}
              <Moment format="MM/DD/YY">
                {testRecord.testFinish}
              </Moment>
            </h3>
            <h3>Total Test Time: {" "}
              <Moment diff={testRecord.testStart} unit="m">
                {testRecord.testFinish}
              </Moment>
              {" "} minutes
            </h3>
            <img src={testRecord.testSignature} alt="signature" className="bg-white img-fluid" />
            <hr />
          </Col>
        )}
      </Row>
      {testRecord && (
        <Row>
          <Col size="12">
            {testRecord.testQuestionList.map((testQuestion,index) => {
              console.log(testQuestion);
              return (
                <div className={!testQuestion.testQuestionCorrect ? "text-danger" : "text-light" }>
                  <p>{index+1} - {testQuestion.testQuestionText}</p>
                  <p><strong>Correct Answer:</strong> {testQuestion.testQuestionAnswer}</p>
                  {!testQuestion.testQuestionCorrect && (<p><strong>Explanation: </strong>{testQuestion.testQuestionExplanation}</p>)}
                  <hr />
                </div>
              )
            })}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default TestView;
