import React, { useEffect, useState } from "react";
import "mdbreact";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import Hipaa from "../../constants/materials.js";
import "./carousel.css";
import testService from "../../services/testService";
// import ADL from '../../components/TestingTests/adl.js';

const Test = ({ location, currentTests, user }) => {
  const [currentTest, setCurrentTest] = useState();
  const [currentQuestionObject, setCurrentQuestionObject] = useState();
  const [correctAnswerCount, setCorrectAnswerCount] = useState();
  const [wrongAnswerCount, setWrongAnswerCount] = useState();
  const [finalizeTest, setFinalizeTest] = useState(false);

  useEffect(() => {
    try {
      let testLoad = currentTests.filter(test => {
        return test._id === location.state.testid;
      });
      testLoad[0].testQuestions = shuffleFunction(testLoad[0].testQuestions);

      setCurrentTest(testLoad);
      setCurrentQuestionObject({
        currentQuestion: testLoad[0].testQuestions[0],
        currentQuestionIndex: 0,
        currentQuestionOptions: scrambleOptions(testLoad[0].testQuestions[0]),
        selectedAnswer: ""
      });
      setCorrectAnswerCount(0);
      setWrongAnswerCount(0);
    } catch (ex) {}
  }, []);

  function shuffleFunction(testQuestions) {
    for (let i = testQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [testQuestions[i], testQuestions[j]] = [
        testQuestions[j],
        testQuestions[i]
      ];
    }
    return testQuestions;
  }

  function scrambleOptions(currentQuestion) {
    let questionArr = [];
    questionArr.push(currentQuestion.questionAnswer);
    if (currentQuestion.questionOptionsGood.length === 1) {
      questionArr.push(currentQuestion.questionOptionsGood[0]);
    } else {
      setCurrentQuestionObject({
        ...currentQuestionObject,
        currentQuestion: {
          questionOptionsGood: shuffleFunction(
            currentQuestion.questionOptionsGood
          ),
          questionOptionsBad: shuffleFunction(
            currentQuestion.questionOptionsBad
          )
        }
      });
      questionArr.push(currentQuestion.questionOptionsGood[0]);
      questionArr.push(currentQuestion.questionOptionsGood[1]);
      questionArr.push(currentQuestion.questionOptionsBad[0]);
    }
    return shuffleFunction(questionArr);
  }

  const handleNext = async e => {
    e.preventDefault();
    const {
      selectedAnswer,
      currentQuestion,
      currentQuestionIndex
    } = currentQuestionObject;

    if (selectedAnswer === "") {
      alert("Please select an Answer");
      return;
    }

    if (correctAnswerCount + wrongAnswerCount <= 10) {
      if (selectedAnswer === currentQuestion.questionAnswer) {
        setCorrectAnswerCount(correctAnswerCount + 1);
      } else {
        setWrongAnswerCount(wrongAnswerCount + 1);
      }
    } else {
      alert(
        "finished - SCORE: " +
          correctAnswerCount / (correctAnswerCount + wrongAnswerCount)
      );
    }

    if (currentQuestionIndex + 1 < 10) {
      setCurrentQuestionObject({
        currentQuestionIndex: currentQuestionIndex + 1,
        currentQuestion: currentTest[0].testQuestions[currentQuestionIndex + 1],
        currentQuestionOptions: scrambleOptions(
          currentTest[0].testQuestions[currentQuestionIndex + 1]
        ),
        selectedAnswer: ""
      });
    } else {
      setFinalizeTest(true);
    }
  };

  const handleAnswerSelect = async e => {
    setCurrentQuestionObject({
      ...currentQuestionObject,
      selectedAnswer: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const currentTestScore =
        (correctAnswerCount / (correctAnswerCount + wrongAnswerCount)) * 100;
      const testRecord = {
        testScore: currentTestScore,
        testPass: currentTestScore >= 70,
        testDate: new Date(),
        testID: currentTest[0]._id
      };
      testService.postTestRecord(testRecord, user.id);

      window.location = "/";
    } catch (ex) {
      if (ex.response) {
        alert(ex.response.data);
      }
    }
  };

  return (
    <MDBContainer className="carousel-container">
      {/* <h1 className="title">{Hipaa.title}</h1> */}
      <MDBCarousel
        className="z-depth-1 carousel"
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        interval={false}
      >
        <div className="carousel-content">
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <div>
                  {Hipaa.content.map(p => (
                    <p>{p.text}</p>
                  ))}
                </div>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              {currentQuestionObject && (
                <MDBView>
                  <h3>{currentQuestionObject.currentQuestion.questionText}</h3>
                  {currentQuestionObject.currentQuestionOptions.map(option => {
                    return (
                      <React.Fragment>
                        <hr />
                        <label className="radio-inline" for={option}>
                          <input
                            id={option}
                            type="radio"
                            name="currentAnswers"
                            value={option}
                            checked={
                              currentQuestionObject.selectedAnswer === option
                            }
                            onChange={handleAnswerSelect}
                          />
                          {option}
                        </label>
                      </React.Fragment>
                    );
                  })}
                  <hr />
                  {!finalizeTest && (
                    <button className="btn-next" onClick={handleNext}>
                      Next
                    </button>
                  )}
                  {finalizeTest && (
                    <React.Fragment>
                      <h6>
                        You scored a:{" "}
                        {(100 * correctAnswerCount) /
                          (correctAnswerCount + wrongAnswerCount)}
                        %
                      </h6>
                      <button className="btn-submit" onClick={handleSubmit}>
                        Submit Test
                      </button>
                    </React.Fragment>
                  )}
                </MDBView>
              )}
            </MDBCarouselItem>

            {/* <MDBCarouselItem itemId="3">
              <MDBView>
                <ADL />
              </MDBView>
            </MDBCarouselItem> */}
          </MDBCarouselInner>
        </div>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Test;
