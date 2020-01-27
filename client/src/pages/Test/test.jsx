import React, { useEffect, useState } from "react";
import "mdbreact";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import { Modal } from 'react-bootstrap'
import Hipaa from "../../constants/materials.js";
import testService from "../../services/testService";
import SignatureCanvas from 'react-signature-canvas'
import "./test.css";
// import ADL from '../../components/TestingTests/adl.js';

const Test = ({ location, user }) => {
  const [currentTest, setCurrentTest] = useState();
  const [currentQuestionObject, setCurrentQuestionObject] = useState();
  const [correctAnswerCount, setCorrectAnswerCount] = useState();
  const [wrongAnswerCount, setWrongAnswerCount] = useState();
  const [startTime, setStartTime] = useState();
  const [questionList, setQuestionsList] = useState([]);
  const [finalizeTest, setFinalizeTest] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [empSignature, setEmpSignature] = useState(false);
  let empSignaturePad = {};

  useEffect(() => {
    try {
      setStartTime(new Date());
      const test = location.state.test;
      test.testQuestions = shuffleFunction(test.testQuestions);

      setCurrentTest(test);
      setCurrentQuestionObject({
        currentQuestion: test.testQuestions[0],
        currentQuestionIndex: 0,
        currentQuestionOptions: scrambleOptions(test.testQuestions[0]),
        selectedAnswer: ""
      });
      setCorrectAnswerCount(0);
      setWrongAnswerCount(0);
    } catch (ex) { }
  }, [location]);

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
    console.log(startTime);
    if (correctAnswerCount + wrongAnswerCount <= 10) {
      if (selectedAnswer === currentQuestion.questionAnswer) {
        setCorrectAnswerCount(correctAnswerCount + 1);
        setQuestionsList([...questionList, {
          testQuestionText: currentQuestion.questionText,
          testQuestionAnswer: currentQuestion.questionAnswer,
          testQuestionCorrect: true
        }]);
      } else {
        setWrongAnswerCount(wrongAnswerCount + 1);
        if (currentQuestion.questionOptionsBad.indexOf(selectedAnswer) > -1) {
          setQuestionsList([...questionList, {
            testQuestionText: currentQuestion.questionText,
            testQuestionAnswer: currentQuestion.questionAnswer,
            testQuestionCorrect: false,
            testQuestionBad: true,
            testQuestionExplanation: currentQuestion.questionExplanation
          }]);
        } else {
          setQuestionsList([...questionList, {
            testQuestionText: currentQuestion.questionText,
            testQuestionAnswer: currentQuestion.questionAnswer,
            testQuestionCorrect: false,
            testQuestionExplanation: currentQuestion.questionExplanation
          }]);
        }
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
        currentQuestion: currentTest.testQuestions[currentQuestionIndex + 1],
        currentQuestionOptions: scrambleOptions(
          currentTest.testQuestions[currentQuestionIndex + 1]
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
        testStart: startTime,
        testFinish: new Date(),
        testID: currentTest._id,
        testQuestionList: questionList,
        testSignature: empSignature
      };
      testService.postTestRecord(testRecord, user.id);

      window.location = "/";
    } catch (ex) {
      if (ex.response) {
        alert(ex.response.data);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  }
  const openModal = () => {
    setShowModal(true);
  }
  const signatureClear = () => {
    empSignaturePad.clear();
  }

  const signatureSave = () => {
    setEmpSignature(empSignaturePad.getTrimmedCanvas().toDataURL('image/png'));
    setShowModal(false);
  }

  return (
    <React.Fragment>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Signature:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignatureCanvas canvasProps={{ width: 300, height: 200, className: 'sigCanvas' }} ref={(ref) => { empSignaturePad = ref }} />
          <button class="btn btn-primary" onClick={signatureClear}>Clear</button>
          <button class="btn btn-success" onClick={signatureSave}>Save</button>
        </Modal.Body>
      </Modal>

      <MDBContainer className="carousel-container">
        {/* <h1 className="title">{Hipaa.title}</h1> */}
        <MDBCarousel
          className="z-depth-1 carousel"
          activeItem={1}
          length={2}
          showControls={false}
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
                    {finalizeTest && !empSignature && (
                      <React.Fragment>
                        <h6>
                          You scored a:{" "}
                          {(100 * correctAnswerCount) /
                            (correctAnswerCount + wrongAnswerCount)}
                          %
                        </h6>
                        <button className="btn-next" onClick={openModal}>
                          Finish Test
                        </button>
                      </React.Fragment>
                    )}
                    {empSignature && <button className="btn-submit" onClick={handleSubmit}>Submit Test - {(100 * correctAnswerCount) /
                            (correctAnswerCount + wrongAnswerCount)}%</button>}
                  </MDBView>
                )}
              </MDBCarouselItem>
            </MDBCarouselInner>
          </div>
        </MDBCarousel>
      </MDBContainer>
    </React.Fragment>
  );
};

export default Test;
