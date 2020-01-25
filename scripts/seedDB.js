const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Tests collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testportal");

const testSeed = [
  {
    testName: "HIPAA",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "HIPAA Q1?",
        questionAnswer: "HIPAA Q1 Correct Answer 1",
        questionExplanation: "HIPAA Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q1 Good Answer 1",
          "HIPAA Q1 Good Answer 2",
          "HIPAA Q1 Good Answer 3",
          "HIPAA Q1 Good Answer 4",
          "HIPAA Q1 Good Answer 5",
          "HIPAA Q1 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q1 Bad Answer 1", "HIPAA Q1 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q2?",
        questionAnswer: "HIPAA Q2 Correct Answer 1",
        questionExplanation: "HIPAA Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q2 Good Answer 1",
          "HIPAA Q2 Good Answer 2",
          "HIPAA Q2 Good Answer 3",
          "HIPAA Q2 Good Answer 4",
          "HIPAA Q2 Good Answer 5",
          "HIPAA Q2 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q2 Bad Answer 1", "HIPAA Q2 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q3?",
        questionAnswer: "HIPAA Q3 Correct Answer 1",
        questionExplanation: "HIPAA Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q3 Good Answer 1",
          "HIPAA Q3 Good Answer 2",
          "HIPAA Q3 Good Answer 3",
          "HIPAA Q3 Good Answer 4",
          "HIPAA Q3 Good Answer 5",
          "HIPAA Q3 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q3 Bad Answer 1", "HIPAA Q3 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q4?",
        questionAnswer: "HIPAA Q4 Correct Answer 1",
        questionExplanation: "HIPAA Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q4 Good Answer 1",
          "HIPAA Q4 Good Answer 2",
          "HIPAA Q4 Good Answer 3",
          "HIPAA Q4 Good Answer 4",
          "HIPAA Q4 Good Answer 5",
          "HIPAA Q4 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q4 Bad Answer 1", "HIPAA Q4 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q5?",
        questionAnswer: "HIPAA Q5 Correct Answer 1",
        questionExplanation: "HIPAA Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q5 Good Answer 1",
          "HIPAA Q5 Good Answer 2",
          "HIPAA Q5 Good Answer 3",
          "HIPAA Q5 Good Answer 4",
          "HIPAA Q5 Good Answer 5",
          "HIPAA Q5 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q5 Bad Answer 1", "HIPAA Q5 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q6?",
        questionAnswer: "HIPAA Q6 Correct Answer 1",
        questionExplanation: "HIPAA Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q6 Good Answer 1",
          "HIPAA Q6 Good Answer 2",
          "HIPAA Q6 Good Answer 3",
          "HIPAA Q6 Good Answer 4",
          "HIPAA Q6 Good Answer 5",
          "HIPAA Q6 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q6 Bad Answer 1", "HIPAA Q6 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q7?",
        questionAnswer: "HIPAA Q7 Correct Answer 1",
        questionExplanation: "HIPAA Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q7 Good Answer 1",
          "HIPAA Q7 Good Answer 2",
          "HIPAA Q7 Good Answer 3",
          "HIPAA Q7 Good Answer 4",
          "HIPAA Q7 Good Answer 5",
          "HIPAA Q7 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q7 Bad Answer 1", "HIPAA Q7 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q8?",
        questionAnswer: "HIPAA Q8 Correct Answer 1",
        questionExplanation: "HIPAA Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q8 Good Answer 1",
          "HIPAA Q8 Good Answer 2",
          "HIPAA Q8 Good Answer 3",
          "HIPAA Q8 Good Answer 4",
          "HIPAA Q8 Good Answer 5",
          "HIPAA Q8 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q8 Bad Answer 1", "HIPAA Q8 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q9?",
        questionAnswer: "HIPAA Q9 Correct Answer 1",
        questionExplanation: "HIPAA Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q9 Good Answer 1",
          "HIPAA Q9 Good Answer 2",
          "HIPAA Q9 Good Answer 3",
          "HIPAA Q9 Good Answer 4",
          "HIPAA Q9 Good Answer 5",
          "HIPAA Q9 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q9 Bad Answer 1", "HIPAA Q9 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q10?",
        questionAnswer: "HIPAA Q10 Correct Answer 1",
        questionExplanation: "HIPAA Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q10 Good Answer 1",
          "HIPAA Q10 Good Answer 2",
          "HIPAA Q10 Good Answer 3",
          "HIPAA Q10 Good Answer 4",
          "HIPAA Q10 Good Answer 5",
          "HIPAA Q10 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q10 Bad Answer 1", "HIPAA Q10 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q11?",
        questionAnswer: "HIPAA Q11 Correct Answer 1",
        questionExplanation: "HIPAA Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q11 Good Answer 1",
          "HIPAA Q11 Good Answer 2",
          "HIPAA Q11 Good Answer 3",
          "HIPAA Q11 Good Answer 4",
          "HIPAA Q11 Good Answer 5",
          "HIPAA Q11 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q11 Bad Answer 1", "HIPAA Q11 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q12?",
        questionAnswer: "HIPAA Q12 Correct Answer 1",
        questionExplanation: "HIPAA Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q12 Good Answer 1",
          "HIPAA Q12 Good Answer 2",
          "HIPAA Q12 Good Answer 3",
          "HIPAA Q12 Good Answer 4",
          "HIPAA Q12 Good Answer 5",
          "HIPAA Q12 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q12 Bad Answer 1", "HIPAA Q12 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q13?",
        questionAnswer: "HIPAA Q13 Correct Answer 1",
        questionExplanation: "HIPAA Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q13 Good Answer 1",
          "HIPAA Q13 Good Answer 2",
          "HIPAA Q13 Good Answer 3",
          "HIPAA Q13 Good Answer 4",
          "HIPAA Q13 Good Answer 5",
          "HIPAA Q13 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q13 Bad Answer 1", "HIPAA Q13 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q14?",
        questionAnswer: "HIPAA Q14 Correct Answer 1",
        questionExplanation: "HIPAA Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q14 Good Answer 1",
          "HIPAA Q14 Good Answer 2",
          "HIPAA Q14 Good Answer 3",
          "HIPAA Q14 Good Answer 4",
          "HIPAA Q14 Good Answer 5",
          "HIPAA Q14 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q14 Bad Answer 1", "HIPAA Q14 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q15?",
        questionAnswer: "HIPAA Q15 Correct Answer 1",
        questionExplanation: "HIPAA Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q15 Good Answer 1",
          "HIPAA Q15 Good Answer 2",
          "HIPAA Q15 Good Answer 3",
          "HIPAA Q15 Good Answer 4",
          "HIPAA Q15 Good Answer 5",
          "HIPAA Q15 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q15 Bad Answer 1", "HIPAA Q15 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q16?",
        questionAnswer: "HIPAA Q16 Correct Answer 1",
        questionExplanation: "HIPAA Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q16 Good Answer 1",
          "HIPAA Q16 Good Answer 2",
          "HIPAA Q16 Good Answer 3",
          "HIPAA Q16 Good Answer 4",
          "HIPAA Q16 Good Answer 5",
          "HIPAA Q16 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q16 Bad Answer 1", "HIPAA Q16 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q17?",
        questionAnswer: "HIPAA Q17 Correct Answer 1",
        questionExplanation: "HIPAA Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q17 Good Answer 1",
          "HIPAA Q17 Good Answer 2",
          "HIPAA Q17 Good Answer 3",
          "HIPAA Q17 Good Answer 4",
          "HIPAA Q17 Good Answer 5",
          "HIPAA Q17 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q17 Bad Answer 1", "HIPAA Q17 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q18?",
        questionAnswer: "HIPAA Q18 Correct Answer 1",
        questionExplanation: "HIPAA Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q18 Good Answer 1",
          "HIPAA Q18 Good Answer 2",
          "HIPAA Q18 Good Answer 3",
          "HIPAA Q18 Good Answer 4",
          "HIPAA Q18 Good Answer 5",
          "HIPAA Q18 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q18 Bad Answer 1", "HIPAA Q18 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q19?",
        questionAnswer: "HIPAA Q19 Correct Answer 1",
        questionExplanation: "HIPAA Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q19 Good Answer 1",
          "HIPAA Q19 Good Answer 2",
          "HIPAA Q19 Good Answer 3",
          "HIPAA Q19 Good Answer 4",
          "HIPAA Q19 Good Answer 5",
          "HIPAA Q19 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q19 Bad Answer 1", "HIPAA Q19 Bad Answer 2"]
      },
      {
        questionText: "HIPAA Q20?",
        questionAnswer: "HIPAA Q20 Correct Answer 1",
        questionExplanation: "HIPAA Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "HIPAA Q20 Good Answer 1",
          "HIPAA Q20 Good Answer 2",
          "HIPAA Q20 Good Answer 3",
          "HIPAA Q20 Good Answer 4",
          "HIPAA Q20 Good Answer 5",
          "HIPAA Q20 Good Answer 6"
        ],
        questionOptionsBad: ["HIPAA Q20 Bad Answer 1", "HIPAA Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Activites of Daily Living",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Activites of Daily Living Q1?",
        questionAnswer: "Activites of Daily Living Q1 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q1 Good Answer 1",
          "Activites of Daily Living Q1 Good Answer 2",
          "Activites of Daily Living Q1 Good Answer 3",
          "Activites of Daily Living Q1 Good Answer 4",
          "Activites of Daily Living Q1 Good Answer 5",
          "Activites of Daily Living Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q1 Bad Answer 1", "Activites of Daily Living Q1 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q2?",
        questionAnswer: "Activites of Daily Living Q2 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q2 Good Answer 1",
          "Activites of Daily Living Q2 Good Answer 2",
          "Activites of Daily Living Q2 Good Answer 3",
          "Activites of Daily Living Q2 Good Answer 4",
          "Activites of Daily Living Q2 Good Answer 5",
          "Activites of Daily Living Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q2 Bad Answer 1", "Activites of Daily Living Q2 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q3?",
        questionAnswer: "Activites of Daily Living Q3 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q3 Good Answer 1",
          "Activites of Daily Living Q3 Good Answer 2",
          "Activites of Daily Living Q3 Good Answer 3",
          "Activites of Daily Living Q3 Good Answer 4",
          "Activites of Daily Living Q3 Good Answer 5",
          "Activites of Daily Living Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q3 Bad Answer 1", "Activites of Daily Living Q3 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q4?",
        questionAnswer: "Activites of Daily Living Q4 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q4 Good Answer 1",
          "Activites of Daily Living Q4 Good Answer 2",
          "Activites of Daily Living Q4 Good Answer 3",
          "Activites of Daily Living Q4 Good Answer 4",
          "Activites of Daily Living Q4 Good Answer 5",
          "Activites of Daily Living Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q4 Bad Answer 1", "Activites of Daily Living Q4 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q5?",
        questionAnswer: "Activites of Daily Living Q5 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q5 Good Answer 1",
          "Activites of Daily Living Q5 Good Answer 2",
          "Activites of Daily Living Q5 Good Answer 3",
          "Activites of Daily Living Q5 Good Answer 4",
          "Activites of Daily Living Q5 Good Answer 5",
          "Activites of Daily Living Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q5 Bad Answer 1", "Activites of Daily Living Q5 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q6?",
        questionAnswer: "Activites of Daily Living Q6 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q6 Good Answer 1",
          "Activites of Daily Living Q6 Good Answer 2",
          "Activites of Daily Living Q6 Good Answer 3",
          "Activites of Daily Living Q6 Good Answer 4",
          "Activites of Daily Living Q6 Good Answer 5",
          "Activites of Daily Living Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q6 Bad Answer 1", "Activites of Daily Living Q6 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q7?",
        questionAnswer: "Activites of Daily Living Q7 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q7 Good Answer 1",
          "Activites of Daily Living Q7 Good Answer 2",
          "Activites of Daily Living Q7 Good Answer 3",
          "Activites of Daily Living Q7 Good Answer 4",
          "Activites of Daily Living Q7 Good Answer 5",
          "Activites of Daily Living Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q7 Bad Answer 1", "Activites of Daily Living Q7 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q8?",
        questionAnswer: "Activites of Daily Living Q8 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q8 Good Answer 1",
          "Activites of Daily Living Q8 Good Answer 2",
          "Activites of Daily Living Q8 Good Answer 3",
          "Activites of Daily Living Q8 Good Answer 4",
          "Activites of Daily Living Q8 Good Answer 5",
          "Activites of Daily Living Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q8 Bad Answer 1", "Activites of Daily Living Q8 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q9?",
        questionAnswer: "Activites of Daily Living Q9 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q9 Good Answer 1",
          "Activites of Daily Living Q9 Good Answer 2",
          "Activites of Daily Living Q9 Good Answer 3",
          "Activites of Daily Living Q9 Good Answer 4",
          "Activites of Daily Living Q9 Good Answer 5",
          "Activites of Daily Living Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q9 Bad Answer 1", "Activites of Daily Living Q9 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q10?",
        questionAnswer: "Activites of Daily Living Q10 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q10 Good Answer 1",
          "Activites of Daily Living Q10 Good Answer 2",
          "Activites of Daily Living Q10 Good Answer 3",
          "Activites of Daily Living Q10 Good Answer 4",
          "Activites of Daily Living Q10 Good Answer 5",
          "Activites of Daily Living Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q10 Bad Answer 1", "Activites of Daily Living Q10 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q11?",
        questionAnswer: "Activites of Daily Living Q11 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q11 Good Answer 1",
          "Activites of Daily Living Q11 Good Answer 2",
          "Activites of Daily Living Q11 Good Answer 3",
          "Activites of Daily Living Q11 Good Answer 4",
          "Activites of Daily Living Q11 Good Answer 5",
          "Activites of Daily Living Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q11 Bad Answer 1", "Activites of Daily Living Q11 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q12?",
        questionAnswer: "Activites of Daily Living Q12 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q12 Good Answer 1",
          "Activites of Daily Living Q12 Good Answer 2",
          "Activites of Daily Living Q12 Good Answer 3",
          "Activites of Daily Living Q12 Good Answer 4",
          "Activites of Daily Living Q12 Good Answer 5",
          "Activites of Daily Living Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q12 Bad Answer 1", "Activites of Daily Living Q12 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q13?",
        questionAnswer: "Activites of Daily Living Q13 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q13 Good Answer 1",
          "Activites of Daily Living Q13 Good Answer 2",
          "Activites of Daily Living Q13 Good Answer 3",
          "Activites of Daily Living Q13 Good Answer 4",
          "Activites of Daily Living Q13 Good Answer 5",
          "Activites of Daily Living Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q13 Bad Answer 1", "Activites of Daily Living Q13 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q14?",
        questionAnswer: "Activites of Daily Living Q14 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q14 Good Answer 1",
          "Activites of Daily Living Q14 Good Answer 2",
          "Activites of Daily Living Q14 Good Answer 3",
          "Activites of Daily Living Q14 Good Answer 4",
          "Activites of Daily Living Q14 Good Answer 5",
          "Activites of Daily Living Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q14 Bad Answer 1", "Activites of Daily Living Q14 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q15?",
        questionAnswer: "Activites of Daily Living Q15 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q15 Good Answer 1",
          "Activites of Daily Living Q15 Good Answer 2",
          "Activites of Daily Living Q15 Good Answer 3",
          "Activites of Daily Living Q15 Good Answer 4",
          "Activites of Daily Living Q15 Good Answer 5",
          "Activites of Daily Living Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q15 Bad Answer 1", "Activites of Daily Living Q15 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q16?",
        questionAnswer: "Activites of Daily Living Q16 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q16 Good Answer 1",
          "Activites of Daily Living Q16 Good Answer 2",
          "Activites of Daily Living Q16 Good Answer 3",
          "Activites of Daily Living Q16 Good Answer 4",
          "Activites of Daily Living Q16 Good Answer 5",
          "Activites of Daily Living Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q16 Bad Answer 1", "Activites of Daily Living Q16 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q17?",
        questionAnswer: "Activites of Daily Living Q17 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q17 Good Answer 1",
          "Activites of Daily Living Q17 Good Answer 2",
          "Activites of Daily Living Q17 Good Answer 3",
          "Activites of Daily Living Q17 Good Answer 4",
          "Activites of Daily Living Q17 Good Answer 5",
          "Activites of Daily Living Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q17 Bad Answer 1", "Activites of Daily Living Q17 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q18?",
        questionAnswer: "Activites of Daily Living Q18 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q18 Good Answer 1",
          "Activites of Daily Living Q18 Good Answer 2",
          "Activites of Daily Living Q18 Good Answer 3",
          "Activites of Daily Living Q18 Good Answer 4",
          "Activites of Daily Living Q18 Good Answer 5",
          "Activites of Daily Living Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q18 Bad Answer 1", "Activites of Daily Living Q18 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q19?",
        questionAnswer: "Activites of Daily Living Q19 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q19 Good Answer 1",
          "Activites of Daily Living Q19 Good Answer 2",
          "Activites of Daily Living Q19 Good Answer 3",
          "Activites of Daily Living Q19 Good Answer 4",
          "Activites of Daily Living Q19 Good Answer 5",
          "Activites of Daily Living Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q19 Bad Answer 1", "Activites of Daily Living Q19 Bad Answer 2"]
      },
      {
        questionText: "Activites of Daily Living Q20?",
        questionAnswer: "Activites of Daily Living Q20 Correct Answer 1",
        questionExplanation: "Activites of Daily Living Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Activites of Daily Living Q20 Good Answer 1",
          "Activites of Daily Living Q20 Good Answer 2",
          "Activites of Daily Living Q20 Good Answer 3",
          "Activites of Daily Living Q20 Good Answer 4",
          "Activites of Daily Living Q20 Good Answer 5",
          "Activites of Daily Living Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Activites of Daily Living Q20 Bad Answer 1", "Activites of Daily Living Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Foot Care",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Foot Care Q1?",
        questionAnswer: "Foot Care Q1 Correct Answer 1",
        questionExplanation: "Foot Care Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q1 Good Answer 1",
          "Foot Care Q1 Good Answer 2",
          "Foot Care Q1 Good Answer 3",
          "Foot Care Q1 Good Answer 4",
          "Foot Care Q1 Good Answer 5",
          "Foot Care Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q1 Bad Answer 1", "Foot Care Q1 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q2?",
        questionAnswer: "Foot Care Q2 Correct Answer 1",
        questionExplanation: "Foot Care Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q2 Good Answer 1",
          "Foot Care Q2 Good Answer 2",
          "Foot Care Q2 Good Answer 3",
          "Foot Care Q2 Good Answer 4",
          "Foot Care Q2 Good Answer 5",
          "Foot Care Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q2 Bad Answer 1", "Foot Care Q2 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q3?",
        questionAnswer: "Foot Care Q3 Correct Answer 1",
        questionExplanation: "Foot Care Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q3 Good Answer 1",
          "Foot Care Q3 Good Answer 2",
          "Foot Care Q3 Good Answer 3",
          "Foot Care Q3 Good Answer 4",
          "Foot Care Q3 Good Answer 5",
          "Foot Care Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q3 Bad Answer 1", "Foot Care Q3 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q4?",
        questionAnswer: "Foot Care Q4 Correct Answer 1",
        questionExplanation: "Foot Care Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q4 Good Answer 1",
          "Foot Care Q4 Good Answer 2",
          "Foot Care Q4 Good Answer 3",
          "Foot Care Q4 Good Answer 4",
          "Foot Care Q4 Good Answer 5",
          "Foot Care Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q4 Bad Answer 1", "Foot Care Q4 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q5?",
        questionAnswer: "Foot Care Q5 Correct Answer 1",
        questionExplanation: "Foot Care Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q5 Good Answer 1",
          "Foot Care Q5 Good Answer 2",
          "Foot Care Q5 Good Answer 3",
          "Foot Care Q5 Good Answer 4",
          "Foot Care Q5 Good Answer 5",
          "Foot Care Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q5 Bad Answer 1", "Foot Care Q5 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q6?",
        questionAnswer: "Foot Care Q6 Correct Answer 1",
        questionExplanation: "Foot Care Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q6 Good Answer 1",
          "Foot Care Q6 Good Answer 2",
          "Foot Care Q6 Good Answer 3",
          "Foot Care Q6 Good Answer 4",
          "Foot Care Q6 Good Answer 5",
          "Foot Care Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q6 Bad Answer 1", "Foot Care Q6 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q7?",
        questionAnswer: "Foot Care Q7 Correct Answer 1",
        questionExplanation: "Foot Care Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q7 Good Answer 1",
          "Foot Care Q7 Good Answer 2",
          "Foot Care Q7 Good Answer 3",
          "Foot Care Q7 Good Answer 4",
          "Foot Care Q7 Good Answer 5",
          "Foot Care Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q7 Bad Answer 1", "Foot Care Q7 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q8?",
        questionAnswer: "Foot Care Q8 Correct Answer 1",
        questionExplanation: "Foot Care Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q8 Good Answer 1",
          "Foot Care Q8 Good Answer 2",
          "Foot Care Q8 Good Answer 3",
          "Foot Care Q8 Good Answer 4",
          "Foot Care Q8 Good Answer 5",
          "Foot Care Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q8 Bad Answer 1", "Foot Care Q8 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q9?",
        questionAnswer: "Foot Care Q9 Correct Answer 1",
        questionExplanation: "Foot Care Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q9 Good Answer 1",
          "Foot Care Q9 Good Answer 2",
          "Foot Care Q9 Good Answer 3",
          "Foot Care Q9 Good Answer 4",
          "Foot Care Q9 Good Answer 5",
          "Foot Care Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q9 Bad Answer 1", "Foot Care Q9 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q10?",
        questionAnswer: "Foot Care Q10 Correct Answer 1",
        questionExplanation: "Foot Care Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q10 Good Answer 1",
          "Foot Care Q10 Good Answer 2",
          "Foot Care Q10 Good Answer 3",
          "Foot Care Q10 Good Answer 4",
          "Foot Care Q10 Good Answer 5",
          "Foot Care Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q10 Bad Answer 1", "Foot Care Q10 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q11?",
        questionAnswer: "Foot Care Q11 Correct Answer 1",
        questionExplanation: "Foot Care Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q11 Good Answer 1",
          "Foot Care Q11 Good Answer 2",
          "Foot Care Q11 Good Answer 3",
          "Foot Care Q11 Good Answer 4",
          "Foot Care Q11 Good Answer 5",
          "Foot Care Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q11 Bad Answer 1", "Foot Care Q11 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q12?",
        questionAnswer: "Foot Care Q12 Correct Answer 1",
        questionExplanation: "Foot Care Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q12 Good Answer 1",
          "Foot Care Q12 Good Answer 2",
          "Foot Care Q12 Good Answer 3",
          "Foot Care Q12 Good Answer 4",
          "Foot Care Q12 Good Answer 5",
          "Foot Care Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q12 Bad Answer 1", "Foot Care Q12 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q13?",
        questionAnswer: "Foot Care Q13 Correct Answer 1",
        questionExplanation: "Foot Care Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q13 Good Answer 1",
          "Foot Care Q13 Good Answer 2",
          "Foot Care Q13 Good Answer 3",
          "Foot Care Q13 Good Answer 4",
          "Foot Care Q13 Good Answer 5",
          "Foot Care Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q13 Bad Answer 1", "Foot Care Q13 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q14?",
        questionAnswer: "Foot Care Q14 Correct Answer 1",
        questionExplanation: "Foot Care Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q14 Good Answer 1",
          "Foot Care Q14 Good Answer 2",
          "Foot Care Q14 Good Answer 3",
          "Foot Care Q14 Good Answer 4",
          "Foot Care Q14 Good Answer 5",
          "Foot Care Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q14 Bad Answer 1", "Foot Care Q14 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q15?",
        questionAnswer: "Foot Care Q15 Correct Answer 1",
        questionExplanation: "Foot Care Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q15 Good Answer 1",
          "Foot Care Q15 Good Answer 2",
          "Foot Care Q15 Good Answer 3",
          "Foot Care Q15 Good Answer 4",
          "Foot Care Q15 Good Answer 5",
          "Foot Care Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q15 Bad Answer 1", "Foot Care Q15 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q16?",
        questionAnswer: "Foot Care Q16 Correct Answer 1",
        questionExplanation: "Foot Care Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q16 Good Answer 1",
          "Foot Care Q16 Good Answer 2",
          "Foot Care Q16 Good Answer 3",
          "Foot Care Q16 Good Answer 4",
          "Foot Care Q16 Good Answer 5",
          "Foot Care Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q16 Bad Answer 1", "Foot Care Q16 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q17?",
        questionAnswer: "Foot Care Q17 Correct Answer 1",
        questionExplanation: "Foot Care Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q17 Good Answer 1",
          "Foot Care Q17 Good Answer 2",
          "Foot Care Q17 Good Answer 3",
          "Foot Care Q17 Good Answer 4",
          "Foot Care Q17 Good Answer 5",
          "Foot Care Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q17 Bad Answer 1", "Foot Care Q17 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q18?",
        questionAnswer: "Foot Care Q18 Correct Answer 1",
        questionExplanation: "Foot Care Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q18 Good Answer 1",
          "Foot Care Q18 Good Answer 2",
          "Foot Care Q18 Good Answer 3",
          "Foot Care Q18 Good Answer 4",
          "Foot Care Q18 Good Answer 5",
          "Foot Care Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q18 Bad Answer 1", "Foot Care Q18 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q19?",
        questionAnswer: "Foot Care Q19 Correct Answer 1",
        questionExplanation: "Foot Care Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q19 Good Answer 1",
          "Foot Care Q19 Good Answer 2",
          "Foot Care Q19 Good Answer 3",
          "Foot Care Q19 Good Answer 4",
          "Foot Care Q19 Good Answer 5",
          "Foot Care Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q19 Bad Answer 1", "Foot Care Q19 Bad Answer 2"]
      },
      {
        questionText: "Foot Care Q20?",
        questionAnswer: "Foot Care Q20 Correct Answer 1",
        questionExplanation: "Foot Care Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Foot Care Q20 Good Answer 1",
          "Foot Care Q20 Good Answer 2",
          "Foot Care Q20 Good Answer 3",
          "Foot Care Q20 Good Answer 4",
          "Foot Care Q20 Good Answer 5",
          "Foot Care Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Foot Care Q20 Bad Answer 1", "Foot Care Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Back Safety",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Back Safety Q1?",
        questionAnswer: "Back Safety Q1 Correct Answer 1",
        questionExplanation: "Back Safety Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q1 Good Answer 1",
          "Back Safety Q1 Good Answer 2",
          "Back Safety Q1 Good Answer 3",
          "Back Safety Q1 Good Answer 4",
          "Back Safety Q1 Good Answer 5",
          "Back Safety Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q1 Bad Answer 1", "Back Safety Q1 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q2?",
        questionAnswer: "Back Safety Q2 Correct Answer 1",
        questionExplanation: "Back Safety Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q2 Good Answer 1",
          "Back Safety Q2 Good Answer 2",
          "Back Safety Q2 Good Answer 3",
          "Back Safety Q2 Good Answer 4",
          "Back Safety Q2 Good Answer 5",
          "Back Safety Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q2 Bad Answer 1", "Back Safety Q2 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q3?",
        questionAnswer: "Back Safety Q3 Correct Answer 1",
        questionExplanation: "Back Safety Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q3 Good Answer 1",
          "Back Safety Q3 Good Answer 2",
          "Back Safety Q3 Good Answer 3",
          "Back Safety Q3 Good Answer 4",
          "Back Safety Q3 Good Answer 5",
          "Back Safety Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q3 Bad Answer 1", "Back Safety Q3 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q4?",
        questionAnswer: "Back Safety Q4 Correct Answer 1",
        questionExplanation: "Back Safety Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q4 Good Answer 1",
          "Back Safety Q4 Good Answer 2",
          "Back Safety Q4 Good Answer 3",
          "Back Safety Q4 Good Answer 4",
          "Back Safety Q4 Good Answer 5",
          "Back Safety Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q4 Bad Answer 1", "Back Safety Q4 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q5?",
        questionAnswer: "Back Safety Q5 Correct Answer 1",
        questionExplanation: "Back Safety Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q5 Good Answer 1",
          "Back Safety Q5 Good Answer 2",
          "Back Safety Q5 Good Answer 3",
          "Back Safety Q5 Good Answer 4",
          "Back Safety Q5 Good Answer 5",
          "Back Safety Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q5 Bad Answer 1", "Back Safety Q5 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q6?",
        questionAnswer: "Back Safety Q6 Correct Answer 1",
        questionExplanation: "Back Safety Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q6 Good Answer 1",
          "Back Safety Q6 Good Answer 2",
          "Back Safety Q6 Good Answer 3",
          "Back Safety Q6 Good Answer 4",
          "Back Safety Q6 Good Answer 5",
          "Back Safety Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q6 Bad Answer 1", "Back Safety Q6 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q7?",
        questionAnswer: "Back Safety Q7 Correct Answer 1",
        questionExplanation: "Back Safety Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q7 Good Answer 1",
          "Back Safety Q7 Good Answer 2",
          "Back Safety Q7 Good Answer 3",
          "Back Safety Q7 Good Answer 4",
          "Back Safety Q7 Good Answer 5",
          "Back Safety Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q7 Bad Answer 1", "Back Safety Q7 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q8?",
        questionAnswer: "Back Safety Q8 Correct Answer 1",
        questionExplanation: "Back Safety Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q8 Good Answer 1",
          "Back Safety Q8 Good Answer 2",
          "Back Safety Q8 Good Answer 3",
          "Back Safety Q8 Good Answer 4",
          "Back Safety Q8 Good Answer 5",
          "Back Safety Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q8 Bad Answer 1", "Back Safety Q8 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q9?",
        questionAnswer: "Back Safety Q9 Correct Answer 1",
        questionExplanation: "Back Safety Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q9 Good Answer 1",
          "Back Safety Q9 Good Answer 2",
          "Back Safety Q9 Good Answer 3",
          "Back Safety Q9 Good Answer 4",
          "Back Safety Q9 Good Answer 5",
          "Back Safety Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q9 Bad Answer 1", "Back Safety Q9 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q10?",
        questionAnswer: "Back Safety Q10 Correct Answer 1",
        questionExplanation: "Back Safety Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q10 Good Answer 1",
          "Back Safety Q10 Good Answer 2",
          "Back Safety Q10 Good Answer 3",
          "Back Safety Q10 Good Answer 4",
          "Back Safety Q10 Good Answer 5",
          "Back Safety Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q10 Bad Answer 1", "Back Safety Q10 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q11?",
        questionAnswer: "Back Safety Q11 Correct Answer 1",
        questionExplanation: "Back Safety Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q11 Good Answer 1",
          "Back Safety Q11 Good Answer 2",
          "Back Safety Q11 Good Answer 3",
          "Back Safety Q11 Good Answer 4",
          "Back Safety Q11 Good Answer 5",
          "Back Safety Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q11 Bad Answer 1", "Back Safety Q11 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q12?",
        questionAnswer: "Back Safety Q12 Correct Answer 1",
        questionExplanation: "Back Safety Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q12 Good Answer 1",
          "Back Safety Q12 Good Answer 2",
          "Back Safety Q12 Good Answer 3",
          "Back Safety Q12 Good Answer 4",
          "Back Safety Q12 Good Answer 5",
          "Back Safety Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q12 Bad Answer 1", "Back Safety Q12 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q13?",
        questionAnswer: "Back Safety Q13 Correct Answer 1",
        questionExplanation: "Back Safety Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q13 Good Answer 1",
          "Back Safety Q13 Good Answer 2",
          "Back Safety Q13 Good Answer 3",
          "Back Safety Q13 Good Answer 4",
          "Back Safety Q13 Good Answer 5",
          "Back Safety Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q13 Bad Answer 1", "Back Safety Q13 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q14?",
        questionAnswer: "Back Safety Q14 Correct Answer 1",
        questionExplanation: "Back Safety Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q14 Good Answer 1",
          "Back Safety Q14 Good Answer 2",
          "Back Safety Q14 Good Answer 3",
          "Back Safety Q14 Good Answer 4",
          "Back Safety Q14 Good Answer 5",
          "Back Safety Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q14 Bad Answer 1", "Back Safety Q14 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q15?",
        questionAnswer: "Back Safety Q15 Correct Answer 1",
        questionExplanation: "Back Safety Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q15 Good Answer 1",
          "Back Safety Q15 Good Answer 2",
          "Back Safety Q15 Good Answer 3",
          "Back Safety Q15 Good Answer 4",
          "Back Safety Q15 Good Answer 5",
          "Back Safety Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q15 Bad Answer 1", "Back Safety Q15 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q16?",
        questionAnswer: "Back Safety Q16 Correct Answer 1",
        questionExplanation: "Back Safety Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q16 Good Answer 1",
          "Back Safety Q16 Good Answer 2",
          "Back Safety Q16 Good Answer 3",
          "Back Safety Q16 Good Answer 4",
          "Back Safety Q16 Good Answer 5",
          "Back Safety Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q16 Bad Answer 1", "Back Safety Q16 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q17?",
        questionAnswer: "Back Safety Q17 Correct Answer 1",
        questionExplanation: "Back Safety Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q17 Good Answer 1",
          "Back Safety Q17 Good Answer 2",
          "Back Safety Q17 Good Answer 3",
          "Back Safety Q17 Good Answer 4",
          "Back Safety Q17 Good Answer 5",
          "Back Safety Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q17 Bad Answer 1", "Back Safety Q17 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q18?",
        questionAnswer: "Back Safety Q18 Correct Answer 1",
        questionExplanation: "Back Safety Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q18 Good Answer 1",
          "Back Safety Q18 Good Answer 2",
          "Back Safety Q18 Good Answer 3",
          "Back Safety Q18 Good Answer 4",
          "Back Safety Q18 Good Answer 5",
          "Back Safety Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q18 Bad Answer 1", "Back Safety Q18 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q19?",
        questionAnswer: "Back Safety Q19 Correct Answer 1",
        questionExplanation: "Back Safety Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q19 Good Answer 1",
          "Back Safety Q19 Good Answer 2",
          "Back Safety Q19 Good Answer 3",
          "Back Safety Q19 Good Answer 4",
          "Back Safety Q19 Good Answer 5",
          "Back Safety Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q19 Bad Answer 1", "Back Safety Q19 Bad Answer 2"]
      },
      {
        questionText: "Back Safety Q20?",
        questionAnswer: "Back Safety Q20 Correct Answer 1",
        questionExplanation: "Back Safety Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Back Safety Q20 Good Answer 1",
          "Back Safety Q20 Good Answer 2",
          "Back Safety Q20 Good Answer 3",
          "Back Safety Q20 Good Answer 4",
          "Back Safety Q20 Good Answer 5",
          "Back Safety Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Back Safety Q20 Bad Answer 1", "Back Safety Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Hand Hygiene",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Hand Hygiene Q1?",
        questionAnswer: "Hand Hygiene Q1 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q1 Good Answer 1",
          "Hand Hygiene Q1 Good Answer 2",
          "Hand Hygiene Q1 Good Answer 3",
          "Hand Hygiene Q1 Good Answer 4",
          "Hand Hygiene Q1 Good Answer 5",
          "Hand Hygiene Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q1 Bad Answer 1", "Hand Hygiene Q1 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q2?",
        questionAnswer: "Hand Hygiene Q2 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q2 Good Answer 1",
          "Hand Hygiene Q2 Good Answer 2",
          "Hand Hygiene Q2 Good Answer 3",
          "Hand Hygiene Q2 Good Answer 4",
          "Hand Hygiene Q2 Good Answer 5",
          "Hand Hygiene Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q2 Bad Answer 1", "Hand Hygiene Q2 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q3?",
        questionAnswer: "Hand Hygiene Q3 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q3 Good Answer 1",
          "Hand Hygiene Q3 Good Answer 2",
          "Hand Hygiene Q3 Good Answer 3",
          "Hand Hygiene Q3 Good Answer 4",
          "Hand Hygiene Q3 Good Answer 5",
          "Hand Hygiene Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q3 Bad Answer 1", "Hand Hygiene Q3 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q4?",
        questionAnswer: "Hand Hygiene Q4 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q4 Good Answer 1",
          "Hand Hygiene Q4 Good Answer 2",
          "Hand Hygiene Q4 Good Answer 3",
          "Hand Hygiene Q4 Good Answer 4",
          "Hand Hygiene Q4 Good Answer 5",
          "Hand Hygiene Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q4 Bad Answer 1", "Hand Hygiene Q4 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q5?",
        questionAnswer: "Hand Hygiene Q5 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q5 Good Answer 1",
          "Hand Hygiene Q5 Good Answer 2",
          "Hand Hygiene Q5 Good Answer 3",
          "Hand Hygiene Q5 Good Answer 4",
          "Hand Hygiene Q5 Good Answer 5",
          "Hand Hygiene Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q5 Bad Answer 1", "Hand Hygiene Q5 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q6?",
        questionAnswer: "Hand Hygiene Q6 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q6 Good Answer 1",
          "Hand Hygiene Q6 Good Answer 2",
          "Hand Hygiene Q6 Good Answer 3",
          "Hand Hygiene Q6 Good Answer 4",
          "Hand Hygiene Q6 Good Answer 5",
          "Hand Hygiene Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q6 Bad Answer 1", "Hand Hygiene Q6 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q7?",
        questionAnswer: "Hand Hygiene Q7 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q7 Good Answer 1",
          "Hand Hygiene Q7 Good Answer 2",
          "Hand Hygiene Q7 Good Answer 3",
          "Hand Hygiene Q7 Good Answer 4",
          "Hand Hygiene Q7 Good Answer 5",
          "Hand Hygiene Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q7 Bad Answer 1", "Hand Hygiene Q7 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q8?",
        questionAnswer: "Hand Hygiene Q8 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q8 Good Answer 1",
          "Hand Hygiene Q8 Good Answer 2",
          "Hand Hygiene Q8 Good Answer 3",
          "Hand Hygiene Q8 Good Answer 4",
          "Hand Hygiene Q8 Good Answer 5",
          "Hand Hygiene Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q8 Bad Answer 1", "Hand Hygiene Q8 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q9?",
        questionAnswer: "Hand Hygiene Q9 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q9 Good Answer 1",
          "Hand Hygiene Q9 Good Answer 2",
          "Hand Hygiene Q9 Good Answer 3",
          "Hand Hygiene Q9 Good Answer 4",
          "Hand Hygiene Q9 Good Answer 5",
          "Hand Hygiene Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q9 Bad Answer 1", "Hand Hygiene Q9 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q10?",
        questionAnswer: "Hand Hygiene Q10 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q10 Good Answer 1",
          "Hand Hygiene Q10 Good Answer 2",
          "Hand Hygiene Q10 Good Answer 3",
          "Hand Hygiene Q10 Good Answer 4",
          "Hand Hygiene Q10 Good Answer 5",
          "Hand Hygiene Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q10 Bad Answer 1", "Hand Hygiene Q10 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q11?",
        questionAnswer: "Hand Hygiene Q11 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q11 Good Answer 1",
          "Hand Hygiene Q11 Good Answer 2",
          "Hand Hygiene Q11 Good Answer 3",
          "Hand Hygiene Q11 Good Answer 4",
          "Hand Hygiene Q11 Good Answer 5",
          "Hand Hygiene Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q11 Bad Answer 1", "Hand Hygiene Q11 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q12?",
        questionAnswer: "Hand Hygiene Q12 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q12 Good Answer 1",
          "Hand Hygiene Q12 Good Answer 2",
          "Hand Hygiene Q12 Good Answer 3",
          "Hand Hygiene Q12 Good Answer 4",
          "Hand Hygiene Q12 Good Answer 5",
          "Hand Hygiene Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q12 Bad Answer 1", "Hand Hygiene Q12 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q13?",
        questionAnswer: "Hand Hygiene Q13 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q13 Good Answer 1",
          "Hand Hygiene Q13 Good Answer 2",
          "Hand Hygiene Q13 Good Answer 3",
          "Hand Hygiene Q13 Good Answer 4",
          "Hand Hygiene Q13 Good Answer 5",
          "Hand Hygiene Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q13 Bad Answer 1", "Hand Hygiene Q13 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q14?",
        questionAnswer: "Hand Hygiene Q14 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q14 Good Answer 1",
          "Hand Hygiene Q14 Good Answer 2",
          "Hand Hygiene Q14 Good Answer 3",
          "Hand Hygiene Q14 Good Answer 4",
          "Hand Hygiene Q14 Good Answer 5",
          "Hand Hygiene Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q14 Bad Answer 1", "Hand Hygiene Q14 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q15?",
        questionAnswer: "Hand Hygiene Q15 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q15 Good Answer 1",
          "Hand Hygiene Q15 Good Answer 2",
          "Hand Hygiene Q15 Good Answer 3",
          "Hand Hygiene Q15 Good Answer 4",
          "Hand Hygiene Q15 Good Answer 5",
          "Hand Hygiene Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q15 Bad Answer 1", "Hand Hygiene Q15 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q16?",
        questionAnswer: "Hand Hygiene Q16 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q16 Good Answer 1",
          "Hand Hygiene Q16 Good Answer 2",
          "Hand Hygiene Q16 Good Answer 3",
          "Hand Hygiene Q16 Good Answer 4",
          "Hand Hygiene Q16 Good Answer 5",
          "Hand Hygiene Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q16 Bad Answer 1", "Hand Hygiene Q16 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q17?",
        questionAnswer: "Hand Hygiene Q17 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q17 Good Answer 1",
          "Hand Hygiene Q17 Good Answer 2",
          "Hand Hygiene Q17 Good Answer 3",
          "Hand Hygiene Q17 Good Answer 4",
          "Hand Hygiene Q17 Good Answer 5",
          "Hand Hygiene Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q17 Bad Answer 1", "Hand Hygiene Q17 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q18?",
        questionAnswer: "Hand Hygiene Q18 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q18 Good Answer 1",
          "Hand Hygiene Q18 Good Answer 2",
          "Hand Hygiene Q18 Good Answer 3",
          "Hand Hygiene Q18 Good Answer 4",
          "Hand Hygiene Q18 Good Answer 5",
          "Hand Hygiene Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q18 Bad Answer 1", "Hand Hygiene Q18 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q19?",
        questionAnswer: "Hand Hygiene Q19 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q19 Good Answer 1",
          "Hand Hygiene Q19 Good Answer 2",
          "Hand Hygiene Q19 Good Answer 3",
          "Hand Hygiene Q19 Good Answer 4",
          "Hand Hygiene Q19 Good Answer 5",
          "Hand Hygiene Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q19 Bad Answer 1", "Hand Hygiene Q19 Bad Answer 2"]
      },
      {
        questionText: "Hand Hygiene Q20?",
        questionAnswer: "Hand Hygiene Q20 Correct Answer 1",
        questionExplanation: "Hand Hygiene Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Hand Hygiene Q20 Good Answer 1",
          "Hand Hygiene Q20 Good Answer 2",
          "Hand Hygiene Q20 Good Answer 3",
          "Hand Hygiene Q20 Good Answer 4",
          "Hand Hygiene Q20 Good Answer 5",
          "Hand Hygiene Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Hand Hygiene Q20 Bad Answer 1", "Hand Hygiene Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Infection Control",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Infection Control Q1?",
        questionAnswer: "Infection Control Q1 Correct Answer 1",
        questionExplanation: "Infection Control Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q1 Good Answer 1",
          "Infection Control Q1 Good Answer 2",
          "Infection Control Q1 Good Answer 3",
          "Infection Control Q1 Good Answer 4",
          "Infection Control Q1 Good Answer 5",
          "Infection Control Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q1 Bad Answer 1", "Infection Control Q1 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q2?",
        questionAnswer: "Infection Control Q2 Correct Answer 1",
        questionExplanation: "Infection Control Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q2 Good Answer 1",
          "Infection Control Q2 Good Answer 2",
          "Infection Control Q2 Good Answer 3",
          "Infection Control Q2 Good Answer 4",
          "Infection Control Q2 Good Answer 5",
          "Infection Control Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q2 Bad Answer 1", "Infection Control Q2 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q3?",
        questionAnswer: "Infection Control Q3 Correct Answer 1",
        questionExplanation: "Infection Control Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q3 Good Answer 1",
          "Infection Control Q3 Good Answer 2",
          "Infection Control Q3 Good Answer 3",
          "Infection Control Q3 Good Answer 4",
          "Infection Control Q3 Good Answer 5",
          "Infection Control Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q3 Bad Answer 1", "Infection Control Q3 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q4?",
        questionAnswer: "Infection Control Q4 Correct Answer 1",
        questionExplanation: "Infection Control Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q4 Good Answer 1",
          "Infection Control Q4 Good Answer 2",
          "Infection Control Q4 Good Answer 3",
          "Infection Control Q4 Good Answer 4",
          "Infection Control Q4 Good Answer 5",
          "Infection Control Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q4 Bad Answer 1", "Infection Control Q4 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q5?",
        questionAnswer: "Infection Control Q5 Correct Answer 1",
        questionExplanation: "Infection Control Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q5 Good Answer 1",
          "Infection Control Q5 Good Answer 2",
          "Infection Control Q5 Good Answer 3",
          "Infection Control Q5 Good Answer 4",
          "Infection Control Q5 Good Answer 5",
          "Infection Control Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q5 Bad Answer 1", "Infection Control Q5 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q6?",
        questionAnswer: "Infection Control Q6 Correct Answer 1",
        questionExplanation: "Infection Control Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q6 Good Answer 1",
          "Infection Control Q6 Good Answer 2",
          "Infection Control Q6 Good Answer 3",
          "Infection Control Q6 Good Answer 4",
          "Infection Control Q6 Good Answer 5",
          "Infection Control Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q6 Bad Answer 1", "Infection Control Q6 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q7?",
        questionAnswer: "Infection Control Q7 Correct Answer 1",
        questionExplanation: "Infection Control Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q7 Good Answer 1",
          "Infection Control Q7 Good Answer 2",
          "Infection Control Q7 Good Answer 3",
          "Infection Control Q7 Good Answer 4",
          "Infection Control Q7 Good Answer 5",
          "Infection Control Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q7 Bad Answer 1", "Infection Control Q7 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q8?",
        questionAnswer: "Infection Control Q8 Correct Answer 1",
        questionExplanation: "Infection Control Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q8 Good Answer 1",
          "Infection Control Q8 Good Answer 2",
          "Infection Control Q8 Good Answer 3",
          "Infection Control Q8 Good Answer 4",
          "Infection Control Q8 Good Answer 5",
          "Infection Control Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q8 Bad Answer 1", "Infection Control Q8 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q9?",
        questionAnswer: "Infection Control Q9 Correct Answer 1",
        questionExplanation: "Infection Control Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q9 Good Answer 1",
          "Infection Control Q9 Good Answer 2",
          "Infection Control Q9 Good Answer 3",
          "Infection Control Q9 Good Answer 4",
          "Infection Control Q9 Good Answer 5",
          "Infection Control Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q9 Bad Answer 1", "Infection Control Q9 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q10?",
        questionAnswer: "Infection Control Q10 Correct Answer 1",
        questionExplanation: "Infection Control Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q10 Good Answer 1",
          "Infection Control Q10 Good Answer 2",
          "Infection Control Q10 Good Answer 3",
          "Infection Control Q10 Good Answer 4",
          "Infection Control Q10 Good Answer 5",
          "Infection Control Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q10 Bad Answer 1", "Infection Control Q10 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q11?",
        questionAnswer: "Infection Control Q11 Correct Answer 1",
        questionExplanation: "Infection Control Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q11 Good Answer 1",
          "Infection Control Q11 Good Answer 2",
          "Infection Control Q11 Good Answer 3",
          "Infection Control Q11 Good Answer 4",
          "Infection Control Q11 Good Answer 5",
          "Infection Control Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q11 Bad Answer 1", "Infection Control Q11 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q12?",
        questionAnswer: "Infection Control Q12 Correct Answer 1",
        questionExplanation: "Infection Control Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q12 Good Answer 1",
          "Infection Control Q12 Good Answer 2",
          "Infection Control Q12 Good Answer 3",
          "Infection Control Q12 Good Answer 4",
          "Infection Control Q12 Good Answer 5",
          "Infection Control Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q12 Bad Answer 1", "Infection Control Q12 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q13?",
        questionAnswer: "Infection Control Q13 Correct Answer 1",
        questionExplanation: "Infection Control Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q13 Good Answer 1",
          "Infection Control Q13 Good Answer 2",
          "Infection Control Q13 Good Answer 3",
          "Infection Control Q13 Good Answer 4",
          "Infection Control Q13 Good Answer 5",
          "Infection Control Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q13 Bad Answer 1", "Infection Control Q13 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q14?",
        questionAnswer: "Infection Control Q14 Correct Answer 1",
        questionExplanation: "Infection Control Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q14 Good Answer 1",
          "Infection Control Q14 Good Answer 2",
          "Infection Control Q14 Good Answer 3",
          "Infection Control Q14 Good Answer 4",
          "Infection Control Q14 Good Answer 5",
          "Infection Control Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q14 Bad Answer 1", "Infection Control Q14 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q15?",
        questionAnswer: "Infection Control Q15 Correct Answer 1",
        questionExplanation: "Infection Control Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q15 Good Answer 1",
          "Infection Control Q15 Good Answer 2",
          "Infection Control Q15 Good Answer 3",
          "Infection Control Q15 Good Answer 4",
          "Infection Control Q15 Good Answer 5",
          "Infection Control Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q15 Bad Answer 1", "Infection Control Q15 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q16?",
        questionAnswer: "Infection Control Q16 Correct Answer 1",
        questionExplanation: "Infection Control Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q16 Good Answer 1",
          "Infection Control Q16 Good Answer 2",
          "Infection Control Q16 Good Answer 3",
          "Infection Control Q16 Good Answer 4",
          "Infection Control Q16 Good Answer 5",
          "Infection Control Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q16 Bad Answer 1", "Infection Control Q16 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q17?",
        questionAnswer: "Infection Control Q17 Correct Answer 1",
        questionExplanation: "Infection Control Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q17 Good Answer 1",
          "Infection Control Q17 Good Answer 2",
          "Infection Control Q17 Good Answer 3",
          "Infection Control Q17 Good Answer 4",
          "Infection Control Q17 Good Answer 5",
          "Infection Control Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q17 Bad Answer 1", "Infection Control Q17 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q18?",
        questionAnswer: "Infection Control Q18 Correct Answer 1",
        questionExplanation: "Infection Control Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q18 Good Answer 1",
          "Infection Control Q18 Good Answer 2",
          "Infection Control Q18 Good Answer 3",
          "Infection Control Q18 Good Answer 4",
          "Infection Control Q18 Good Answer 5",
          "Infection Control Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q18 Bad Answer 1", "Infection Control Q18 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q19?",
        questionAnswer: "Infection Control Q19 Correct Answer 1",
        questionExplanation: "Infection Control Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q19 Good Answer 1",
          "Infection Control Q19 Good Answer 2",
          "Infection Control Q19 Good Answer 3",
          "Infection Control Q19 Good Answer 4",
          "Infection Control Q19 Good Answer 5",
          "Infection Control Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q19 Bad Answer 1", "Infection Control Q19 Bad Answer 2"]
      },
      {
        questionText: "Infection Control Q20?",
        questionAnswer: "Infection Control Q20 Correct Answer 1",
        questionExplanation: "Infection Control Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Infection Control Q20 Good Answer 1",
          "Infection Control Q20 Good Answer 2",
          "Infection Control Q20 Good Answer 3",
          "Infection Control Q20 Good Answer 4",
          "Infection Control Q20 Good Answer 5",
          "Infection Control Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Infection Control Q20 Bad Answer 1", "Infection Control Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Nutrition",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Nutrition Q1?",
        questionAnswer: "Nutrition Q1 Correct Answer 1",
        questionExplanation: "Nutrition Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q1 Good Answer 1",
          "Nutrition Q1 Good Answer 2",
          "Nutrition Q1 Good Answer 3",
          "Nutrition Q1 Good Answer 4",
          "Nutrition Q1 Good Answer 5",
          "Nutrition Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q1 Bad Answer 1", "Nutrition Q1 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q2?",
        questionAnswer: "Nutrition Q2 Correct Answer 1",
        questionExplanation: "Nutrition Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q2 Good Answer 1",
          "Nutrition Q2 Good Answer 2",
          "Nutrition Q2 Good Answer 3",
          "Nutrition Q2 Good Answer 4",
          "Nutrition Q2 Good Answer 5",
          "Nutrition Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q2 Bad Answer 1", "Nutrition Q2 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q3?",
        questionAnswer: "Nutrition Q3 Correct Answer 1",
        questionExplanation: "Nutrition Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q3 Good Answer 1",
          "Nutrition Q3 Good Answer 2",
          "Nutrition Q3 Good Answer 3",
          "Nutrition Q3 Good Answer 4",
          "Nutrition Q3 Good Answer 5",
          "Nutrition Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q3 Bad Answer 1", "Nutrition Q3 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q4?",
        questionAnswer: "Nutrition Q4 Correct Answer 1",
        questionExplanation: "Nutrition Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q4 Good Answer 1",
          "Nutrition Q4 Good Answer 2",
          "Nutrition Q4 Good Answer 3",
          "Nutrition Q4 Good Answer 4",
          "Nutrition Q4 Good Answer 5",
          "Nutrition Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q4 Bad Answer 1", "Nutrition Q4 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q5?",
        questionAnswer: "Nutrition Q5 Correct Answer 1",
        questionExplanation: "Nutrition Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q5 Good Answer 1",
          "Nutrition Q5 Good Answer 2",
          "Nutrition Q5 Good Answer 3",
          "Nutrition Q5 Good Answer 4",
          "Nutrition Q5 Good Answer 5",
          "Nutrition Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q5 Bad Answer 1", "Nutrition Q5 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q6?",
        questionAnswer: "Nutrition Q6 Correct Answer 1",
        questionExplanation: "Nutrition Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q6 Good Answer 1",
          "Nutrition Q6 Good Answer 2",
          "Nutrition Q6 Good Answer 3",
          "Nutrition Q6 Good Answer 4",
          "Nutrition Q6 Good Answer 5",
          "Nutrition Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q6 Bad Answer 1", "Nutrition Q6 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q7?",
        questionAnswer: "Nutrition Q7 Correct Answer 1",
        questionExplanation: "Nutrition Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q7 Good Answer 1",
          "Nutrition Q7 Good Answer 2",
          "Nutrition Q7 Good Answer 3",
          "Nutrition Q7 Good Answer 4",
          "Nutrition Q7 Good Answer 5",
          "Nutrition Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q7 Bad Answer 1", "Nutrition Q7 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q8?",
        questionAnswer: "Nutrition Q8 Correct Answer 1",
        questionExplanation: "Nutrition Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q8 Good Answer 1",
          "Nutrition Q8 Good Answer 2",
          "Nutrition Q8 Good Answer 3",
          "Nutrition Q8 Good Answer 4",
          "Nutrition Q8 Good Answer 5",
          "Nutrition Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q8 Bad Answer 1", "Nutrition Q8 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q9?",
        questionAnswer: "Nutrition Q9 Correct Answer 1",
        questionExplanation: "Nutrition Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q9 Good Answer 1",
          "Nutrition Q9 Good Answer 2",
          "Nutrition Q9 Good Answer 3",
          "Nutrition Q9 Good Answer 4",
          "Nutrition Q9 Good Answer 5",
          "Nutrition Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q9 Bad Answer 1", "Nutrition Q9 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q10?",
        questionAnswer: "Nutrition Q10 Correct Answer 1",
        questionExplanation: "Nutrition Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q10 Good Answer 1",
          "Nutrition Q10 Good Answer 2",
          "Nutrition Q10 Good Answer 3",
          "Nutrition Q10 Good Answer 4",
          "Nutrition Q10 Good Answer 5",
          "Nutrition Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q10 Bad Answer 1", "Nutrition Q10 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q11?",
        questionAnswer: "Nutrition Q11 Correct Answer 1",
        questionExplanation: "Nutrition Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q11 Good Answer 1",
          "Nutrition Q11 Good Answer 2",
          "Nutrition Q11 Good Answer 3",
          "Nutrition Q11 Good Answer 4",
          "Nutrition Q11 Good Answer 5",
          "Nutrition Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q11 Bad Answer 1", "Nutrition Q11 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q12?",
        questionAnswer: "Nutrition Q12 Correct Answer 1",
        questionExplanation: "Nutrition Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q12 Good Answer 1",
          "Nutrition Q12 Good Answer 2",
          "Nutrition Q12 Good Answer 3",
          "Nutrition Q12 Good Answer 4",
          "Nutrition Q12 Good Answer 5",
          "Nutrition Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q12 Bad Answer 1", "Nutrition Q12 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q13?",
        questionAnswer: "Nutrition Q13 Correct Answer 1",
        questionExplanation: "Nutrition Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q13 Good Answer 1",
          "Nutrition Q13 Good Answer 2",
          "Nutrition Q13 Good Answer 3",
          "Nutrition Q13 Good Answer 4",
          "Nutrition Q13 Good Answer 5",
          "Nutrition Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q13 Bad Answer 1", "Nutrition Q13 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q14?",
        questionAnswer: "Nutrition Q14 Correct Answer 1",
        questionExplanation: "Nutrition Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q14 Good Answer 1",
          "Nutrition Q14 Good Answer 2",
          "Nutrition Q14 Good Answer 3",
          "Nutrition Q14 Good Answer 4",
          "Nutrition Q14 Good Answer 5",
          "Nutrition Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q14 Bad Answer 1", "Nutrition Q14 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q15?",
        questionAnswer: "Nutrition Q15 Correct Answer 1",
        questionExplanation: "Nutrition Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q15 Good Answer 1",
          "Nutrition Q15 Good Answer 2",
          "Nutrition Q15 Good Answer 3",
          "Nutrition Q15 Good Answer 4",
          "Nutrition Q15 Good Answer 5",
          "Nutrition Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q15 Bad Answer 1", "Nutrition Q15 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q16?",
        questionAnswer: "Nutrition Q16 Correct Answer 1",
        questionExplanation: "Nutrition Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q16 Good Answer 1",
          "Nutrition Q16 Good Answer 2",
          "Nutrition Q16 Good Answer 3",
          "Nutrition Q16 Good Answer 4",
          "Nutrition Q16 Good Answer 5",
          "Nutrition Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q16 Bad Answer 1", "Nutrition Q16 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q17?",
        questionAnswer: "Nutrition Q17 Correct Answer 1",
        questionExplanation: "Nutrition Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q17 Good Answer 1",
          "Nutrition Q17 Good Answer 2",
          "Nutrition Q17 Good Answer 3",
          "Nutrition Q17 Good Answer 4",
          "Nutrition Q17 Good Answer 5",
          "Nutrition Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q17 Bad Answer 1", "Nutrition Q17 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q18?",
        questionAnswer: "Nutrition Q18 Correct Answer 1",
        questionExplanation: "Nutrition Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q18 Good Answer 1",
          "Nutrition Q18 Good Answer 2",
          "Nutrition Q18 Good Answer 3",
          "Nutrition Q18 Good Answer 4",
          "Nutrition Q18 Good Answer 5",
          "Nutrition Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q18 Bad Answer 1", "Nutrition Q18 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q19?",
        questionAnswer: "Nutrition Q19 Correct Answer 1",
        questionExplanation: "Nutrition Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q19 Good Answer 1",
          "Nutrition Q19 Good Answer 2",
          "Nutrition Q19 Good Answer 3",
          "Nutrition Q19 Good Answer 4",
          "Nutrition Q19 Good Answer 5",
          "Nutrition Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q19 Bad Answer 1", "Nutrition Q19 Bad Answer 2"]
      },
      {
        questionText: "Nutrition Q20?",
        questionAnswer: "Nutrition Q20 Correct Answer 1",
        questionExplanation: "Nutrition Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Nutrition Q20 Good Answer 1",
          "Nutrition Q20 Good Answer 2",
          "Nutrition Q20 Good Answer 3",
          "Nutrition Q20 Good Answer 4",
          "Nutrition Q20 Good Answer 5",
          "Nutrition Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Nutrition Q20 Bad Answer 1", "Nutrition Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Oral Hygiene",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Oral Hygiene Q1?",
        questionAnswer: "Oral Hygiene Q1 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q1 Good Answer 1",
          "Oral Hygiene Q1 Good Answer 2",
          "Oral Hygiene Q1 Good Answer 3",
          "Oral Hygiene Q1 Good Answer 4",
          "Oral Hygiene Q1 Good Answer 5",
          "Oral Hygiene Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q1 Bad Answer 1", "Oral Hygiene Q1 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q2?",
        questionAnswer: "Oral Hygiene Q2 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q2 Good Answer 1",
          "Oral Hygiene Q2 Good Answer 2",
          "Oral Hygiene Q2 Good Answer 3",
          "Oral Hygiene Q2 Good Answer 4",
          "Oral Hygiene Q2 Good Answer 5",
          "Oral Hygiene Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q2 Bad Answer 1", "Oral Hygiene Q2 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q3?",
        questionAnswer: "Oral Hygiene Q3 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q3 Good Answer 1",
          "Oral Hygiene Q3 Good Answer 2",
          "Oral Hygiene Q3 Good Answer 3",
          "Oral Hygiene Q3 Good Answer 4",
          "Oral Hygiene Q3 Good Answer 5",
          "Oral Hygiene Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q3 Bad Answer 1", "Oral Hygiene Q3 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q4?",
        questionAnswer: "Oral Hygiene Q4 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q4 Good Answer 1",
          "Oral Hygiene Q4 Good Answer 2",
          "Oral Hygiene Q4 Good Answer 3",
          "Oral Hygiene Q4 Good Answer 4",
          "Oral Hygiene Q4 Good Answer 5",
          "Oral Hygiene Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q4 Bad Answer 1", "Oral Hygiene Q4 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q5?",
        questionAnswer: "Oral Hygiene Q5 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q5 Good Answer 1",
          "Oral Hygiene Q5 Good Answer 2",
          "Oral Hygiene Q5 Good Answer 3",
          "Oral Hygiene Q5 Good Answer 4",
          "Oral Hygiene Q5 Good Answer 5",
          "Oral Hygiene Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q5 Bad Answer 1", "Oral Hygiene Q5 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q6?",
        questionAnswer: "Oral Hygiene Q6 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q6 Good Answer 1",
          "Oral Hygiene Q6 Good Answer 2",
          "Oral Hygiene Q6 Good Answer 3",
          "Oral Hygiene Q6 Good Answer 4",
          "Oral Hygiene Q6 Good Answer 5",
          "Oral Hygiene Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q6 Bad Answer 1", "Oral Hygiene Q6 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q7?",
        questionAnswer: "Oral Hygiene Q7 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q7 Good Answer 1",
          "Oral Hygiene Q7 Good Answer 2",
          "Oral Hygiene Q7 Good Answer 3",
          "Oral Hygiene Q7 Good Answer 4",
          "Oral Hygiene Q7 Good Answer 5",
          "Oral Hygiene Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q7 Bad Answer 1", "Oral Hygiene Q7 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q8?",
        questionAnswer: "Oral Hygiene Q8 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q8 Good Answer 1",
          "Oral Hygiene Q8 Good Answer 2",
          "Oral Hygiene Q8 Good Answer 3",
          "Oral Hygiene Q8 Good Answer 4",
          "Oral Hygiene Q8 Good Answer 5",
          "Oral Hygiene Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q8 Bad Answer 1", "Oral Hygiene Q8 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q9?",
        questionAnswer: "Oral Hygiene Q9 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q9 Good Answer 1",
          "Oral Hygiene Q9 Good Answer 2",
          "Oral Hygiene Q9 Good Answer 3",
          "Oral Hygiene Q9 Good Answer 4",
          "Oral Hygiene Q9 Good Answer 5",
          "Oral Hygiene Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q9 Bad Answer 1", "Oral Hygiene Q9 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q10?",
        questionAnswer: "Oral Hygiene Q10 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q10 Good Answer 1",
          "Oral Hygiene Q10 Good Answer 2",
          "Oral Hygiene Q10 Good Answer 3",
          "Oral Hygiene Q10 Good Answer 4",
          "Oral Hygiene Q10 Good Answer 5",
          "Oral Hygiene Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q10 Bad Answer 1", "Oral Hygiene Q10 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q11?",
        questionAnswer: "Oral Hygiene Q11 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q11 Good Answer 1",
          "Oral Hygiene Q11 Good Answer 2",
          "Oral Hygiene Q11 Good Answer 3",
          "Oral Hygiene Q11 Good Answer 4",
          "Oral Hygiene Q11 Good Answer 5",
          "Oral Hygiene Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q11 Bad Answer 1", "Oral Hygiene Q11 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q12?",
        questionAnswer: "Oral Hygiene Q12 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q12 Good Answer 1",
          "Oral Hygiene Q12 Good Answer 2",
          "Oral Hygiene Q12 Good Answer 3",
          "Oral Hygiene Q12 Good Answer 4",
          "Oral Hygiene Q12 Good Answer 5",
          "Oral Hygiene Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q12 Bad Answer 1", "Oral Hygiene Q12 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q13?",
        questionAnswer: "Oral Hygiene Q13 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q13 Good Answer 1",
          "Oral Hygiene Q13 Good Answer 2",
          "Oral Hygiene Q13 Good Answer 3",
          "Oral Hygiene Q13 Good Answer 4",
          "Oral Hygiene Q13 Good Answer 5",
          "Oral Hygiene Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q13 Bad Answer 1", "Oral Hygiene Q13 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q14?",
        questionAnswer: "Oral Hygiene Q14 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q14 Good Answer 1",
          "Oral Hygiene Q14 Good Answer 2",
          "Oral Hygiene Q14 Good Answer 3",
          "Oral Hygiene Q14 Good Answer 4",
          "Oral Hygiene Q14 Good Answer 5",
          "Oral Hygiene Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q14 Bad Answer 1", "Oral Hygiene Q14 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q15?",
        questionAnswer: "Oral Hygiene Q15 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q15 Good Answer 1",
          "Oral Hygiene Q15 Good Answer 2",
          "Oral Hygiene Q15 Good Answer 3",
          "Oral Hygiene Q15 Good Answer 4",
          "Oral Hygiene Q15 Good Answer 5",
          "Oral Hygiene Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q15 Bad Answer 1", "Oral Hygiene Q15 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q16?",
        questionAnswer: "Oral Hygiene Q16 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q16 Good Answer 1",
          "Oral Hygiene Q16 Good Answer 2",
          "Oral Hygiene Q16 Good Answer 3",
          "Oral Hygiene Q16 Good Answer 4",
          "Oral Hygiene Q16 Good Answer 5",
          "Oral Hygiene Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q16 Bad Answer 1", "Oral Hygiene Q16 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q17?",
        questionAnswer: "Oral Hygiene Q17 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q17 Good Answer 1",
          "Oral Hygiene Q17 Good Answer 2",
          "Oral Hygiene Q17 Good Answer 3",
          "Oral Hygiene Q17 Good Answer 4",
          "Oral Hygiene Q17 Good Answer 5",
          "Oral Hygiene Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q17 Bad Answer 1", "Oral Hygiene Q17 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q18?",
        questionAnswer: "Oral Hygiene Q18 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q18 Good Answer 1",
          "Oral Hygiene Q18 Good Answer 2",
          "Oral Hygiene Q18 Good Answer 3",
          "Oral Hygiene Q18 Good Answer 4",
          "Oral Hygiene Q18 Good Answer 5",
          "Oral Hygiene Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q18 Bad Answer 1", "Oral Hygiene Q18 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q19?",
        questionAnswer: "Oral Hygiene Q19 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q19 Good Answer 1",
          "Oral Hygiene Q19 Good Answer 2",
          "Oral Hygiene Q19 Good Answer 3",
          "Oral Hygiene Q19 Good Answer 4",
          "Oral Hygiene Q19 Good Answer 5",
          "Oral Hygiene Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q19 Bad Answer 1", "Oral Hygiene Q19 Bad Answer 2"]
      },
      {
        questionText: "Oral Hygiene Q20?",
        questionAnswer: "Oral Hygiene Q20 Correct Answer 1",
        questionExplanation: "Oral Hygiene Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Oral Hygiene Q20 Good Answer 1",
          "Oral Hygiene Q20 Good Answer 2",
          "Oral Hygiene Q20 Good Answer 3",
          "Oral Hygiene Q20 Good Answer 4",
          "Oral Hygiene Q20 Good Answer 5",
          "Oral Hygiene Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Oral Hygiene Q20 Bad Answer 1", "Oral Hygiene Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Preventing Falls",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Preventing Falls Q1?",
        questionAnswer: "Preventing Falls Q1 Correct Answer 1",
        questionExplanation: "Preventing Falls Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q1 Good Answer 1",
          "Preventing Falls Q1 Good Answer 2",
          "Preventing Falls Q1 Good Answer 3",
          "Preventing Falls Q1 Good Answer 4",
          "Preventing Falls Q1 Good Answer 5",
          "Preventing Falls Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q1 Bad Answer 1", "Preventing Falls Q1 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q2?",
        questionAnswer: "Preventing Falls Q2 Correct Answer 1",
        questionExplanation: "Preventing Falls Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q2 Good Answer 1",
          "Preventing Falls Q2 Good Answer 2",
          "Preventing Falls Q2 Good Answer 3",
          "Preventing Falls Q2 Good Answer 4",
          "Preventing Falls Q2 Good Answer 5",
          "Preventing Falls Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q2 Bad Answer 1", "Preventing Falls Q2 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q3?",
        questionAnswer: "Preventing Falls Q3 Correct Answer 1",
        questionExplanation: "Preventing Falls Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q3 Good Answer 1",
          "Preventing Falls Q3 Good Answer 2",
          "Preventing Falls Q3 Good Answer 3",
          "Preventing Falls Q3 Good Answer 4",
          "Preventing Falls Q3 Good Answer 5",
          "Preventing Falls Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q3 Bad Answer 1", "Preventing Falls Q3 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q4?",
        questionAnswer: "Preventing Falls Q4 Correct Answer 1",
        questionExplanation: "Preventing Falls Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q4 Good Answer 1",
          "Preventing Falls Q4 Good Answer 2",
          "Preventing Falls Q4 Good Answer 3",
          "Preventing Falls Q4 Good Answer 4",
          "Preventing Falls Q4 Good Answer 5",
          "Preventing Falls Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q4 Bad Answer 1", "Preventing Falls Q4 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q5?",
        questionAnswer: "Preventing Falls Q5 Correct Answer 1",
        questionExplanation: "Preventing Falls Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q5 Good Answer 1",
          "Preventing Falls Q5 Good Answer 2",
          "Preventing Falls Q5 Good Answer 3",
          "Preventing Falls Q5 Good Answer 4",
          "Preventing Falls Q5 Good Answer 5",
          "Preventing Falls Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q5 Bad Answer 1", "Preventing Falls Q5 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q6?",
        questionAnswer: "Preventing Falls Q6 Correct Answer 1",
        questionExplanation: "Preventing Falls Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q6 Good Answer 1",
          "Preventing Falls Q6 Good Answer 2",
          "Preventing Falls Q6 Good Answer 3",
          "Preventing Falls Q6 Good Answer 4",
          "Preventing Falls Q6 Good Answer 5",
          "Preventing Falls Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q6 Bad Answer 1", "Preventing Falls Q6 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q7?",
        questionAnswer: "Preventing Falls Q7 Correct Answer 1",
        questionExplanation: "Preventing Falls Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q7 Good Answer 1",
          "Preventing Falls Q7 Good Answer 2",
          "Preventing Falls Q7 Good Answer 3",
          "Preventing Falls Q7 Good Answer 4",
          "Preventing Falls Q7 Good Answer 5",
          "Preventing Falls Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q7 Bad Answer 1", "Preventing Falls Q7 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q8?",
        questionAnswer: "Preventing Falls Q8 Correct Answer 1",
        questionExplanation: "Preventing Falls Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q8 Good Answer 1",
          "Preventing Falls Q8 Good Answer 2",
          "Preventing Falls Q8 Good Answer 3",
          "Preventing Falls Q8 Good Answer 4",
          "Preventing Falls Q8 Good Answer 5",
          "Preventing Falls Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q8 Bad Answer 1", "Preventing Falls Q8 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q9?",
        questionAnswer: "Preventing Falls Q9 Correct Answer 1",
        questionExplanation: "Preventing Falls Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q9 Good Answer 1",
          "Preventing Falls Q9 Good Answer 2",
          "Preventing Falls Q9 Good Answer 3",
          "Preventing Falls Q9 Good Answer 4",
          "Preventing Falls Q9 Good Answer 5",
          "Preventing Falls Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q9 Bad Answer 1", "Preventing Falls Q9 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q10?",
        questionAnswer: "Preventing Falls Q10 Correct Answer 1",
        questionExplanation: "Preventing Falls Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q10 Good Answer 1",
          "Preventing Falls Q10 Good Answer 2",
          "Preventing Falls Q10 Good Answer 3",
          "Preventing Falls Q10 Good Answer 4",
          "Preventing Falls Q10 Good Answer 5",
          "Preventing Falls Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q10 Bad Answer 1", "Preventing Falls Q10 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q11?",
        questionAnswer: "Preventing Falls Q11 Correct Answer 1",
        questionExplanation: "Preventing Falls Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q11 Good Answer 1",
          "Preventing Falls Q11 Good Answer 2",
          "Preventing Falls Q11 Good Answer 3",
          "Preventing Falls Q11 Good Answer 4",
          "Preventing Falls Q11 Good Answer 5",
          "Preventing Falls Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q11 Bad Answer 1", "Preventing Falls Q11 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q12?",
        questionAnswer: "Preventing Falls Q12 Correct Answer 1",
        questionExplanation: "Preventing Falls Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q12 Good Answer 1",
          "Preventing Falls Q12 Good Answer 2",
          "Preventing Falls Q12 Good Answer 3",
          "Preventing Falls Q12 Good Answer 4",
          "Preventing Falls Q12 Good Answer 5",
          "Preventing Falls Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q12 Bad Answer 1", "Preventing Falls Q12 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q13?",
        questionAnswer: "Preventing Falls Q13 Correct Answer 1",
        questionExplanation: "Preventing Falls Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q13 Good Answer 1",
          "Preventing Falls Q13 Good Answer 2",
          "Preventing Falls Q13 Good Answer 3",
          "Preventing Falls Q13 Good Answer 4",
          "Preventing Falls Q13 Good Answer 5",
          "Preventing Falls Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q13 Bad Answer 1", "Preventing Falls Q13 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q14?",
        questionAnswer: "Preventing Falls Q14 Correct Answer 1",
        questionExplanation: "Preventing Falls Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q14 Good Answer 1",
          "Preventing Falls Q14 Good Answer 2",
          "Preventing Falls Q14 Good Answer 3",
          "Preventing Falls Q14 Good Answer 4",
          "Preventing Falls Q14 Good Answer 5",
          "Preventing Falls Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q14 Bad Answer 1", "Preventing Falls Q14 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q15?",
        questionAnswer: "Preventing Falls Q15 Correct Answer 1",
        questionExplanation: "Preventing Falls Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q15 Good Answer 1",
          "Preventing Falls Q15 Good Answer 2",
          "Preventing Falls Q15 Good Answer 3",
          "Preventing Falls Q15 Good Answer 4",
          "Preventing Falls Q15 Good Answer 5",
          "Preventing Falls Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q15 Bad Answer 1", "Preventing Falls Q15 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q16?",
        questionAnswer: "Preventing Falls Q16 Correct Answer 1",
        questionExplanation: "Preventing Falls Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q16 Good Answer 1",
          "Preventing Falls Q16 Good Answer 2",
          "Preventing Falls Q16 Good Answer 3",
          "Preventing Falls Q16 Good Answer 4",
          "Preventing Falls Q16 Good Answer 5",
          "Preventing Falls Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q16 Bad Answer 1", "Preventing Falls Q16 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q17?",
        questionAnswer: "Preventing Falls Q17 Correct Answer 1",
        questionExplanation: "Preventing Falls Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q17 Good Answer 1",
          "Preventing Falls Q17 Good Answer 2",
          "Preventing Falls Q17 Good Answer 3",
          "Preventing Falls Q17 Good Answer 4",
          "Preventing Falls Q17 Good Answer 5",
          "Preventing Falls Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q17 Bad Answer 1", "Preventing Falls Q17 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q18?",
        questionAnswer: "Preventing Falls Q18 Correct Answer 1",
        questionExplanation: "Preventing Falls Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q18 Good Answer 1",
          "Preventing Falls Q18 Good Answer 2",
          "Preventing Falls Q18 Good Answer 3",
          "Preventing Falls Q18 Good Answer 4",
          "Preventing Falls Q18 Good Answer 5",
          "Preventing Falls Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q18 Bad Answer 1", "Preventing Falls Q18 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q19?",
        questionAnswer: "Preventing Falls Q19 Correct Answer 1",
        questionExplanation: "Preventing Falls Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q19 Good Answer 1",
          "Preventing Falls Q19 Good Answer 2",
          "Preventing Falls Q19 Good Answer 3",
          "Preventing Falls Q19 Good Answer 4",
          "Preventing Falls Q19 Good Answer 5",
          "Preventing Falls Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q19 Bad Answer 1", "Preventing Falls Q19 Bad Answer 2"]
      },
      {
        questionText: "Preventing Falls Q20?",
        questionAnswer: "Preventing Falls Q20 Correct Answer 1",
        questionExplanation: "Preventing Falls Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Preventing Falls Q20 Good Answer 1",
          "Preventing Falls Q20 Good Answer 2",
          "Preventing Falls Q20 Good Answer 3",
          "Preventing Falls Q20 Good Answer 4",
          "Preventing Falls Q20 Good Answer 5",
          "Preventing Falls Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Preventing Falls Q20 Bad Answer 1", "Preventing Falls Q20 Bad Answer 2"]
      }
    ]
  },
  {
    testName: "Safe Transfers",
    testCategory: "safety",
    testRequired: true,
    testImage: "",
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "Safe Transfers Q1?",
        questionAnswer: "Safe Transfers Q1 Correct Answer 1",
        questionExplanation: "Safe Transfers Q1 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q1 Good Answer 1",
          "Safe Transfers Q1 Good Answer 2",
          "Safe Transfers Q1 Good Answer 3",
          "Safe Transfers Q1 Good Answer 4",
          "Safe Transfers Q1 Good Answer 5",
          "Safe Transfers Q1 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q1 Bad Answer 1", "Safe Transfers Q1 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q2?",
        questionAnswer: "Safe Transfers Q2 Correct Answer 1",
        questionExplanation: "Safe Transfers Q2 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q2 Good Answer 1",
          "Safe Transfers Q2 Good Answer 2",
          "Safe Transfers Q2 Good Answer 3",
          "Safe Transfers Q2 Good Answer 4",
          "Safe Transfers Q2 Good Answer 5",
          "Safe Transfers Q2 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q2 Bad Answer 1", "Safe Transfers Q2 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q3?",
        questionAnswer: "Safe Transfers Q3 Correct Answer 1",
        questionExplanation: "Safe Transfers Q3 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q3 Good Answer 1",
          "Safe Transfers Q3 Good Answer 2",
          "Safe Transfers Q3 Good Answer 3",
          "Safe Transfers Q3 Good Answer 4",
          "Safe Transfers Q3 Good Answer 5",
          "Safe Transfers Q3 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q3 Bad Answer 1", "Safe Transfers Q3 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q4?",
        questionAnswer: "Safe Transfers Q4 Correct Answer 1",
        questionExplanation: "Safe Transfers Q4 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q4 Good Answer 1",
          "Safe Transfers Q4 Good Answer 2",
          "Safe Transfers Q4 Good Answer 3",
          "Safe Transfers Q4 Good Answer 4",
          "Safe Transfers Q4 Good Answer 5",
          "Safe Transfers Q4 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q4 Bad Answer 1", "Safe Transfers Q4 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q5?",
        questionAnswer: "Safe Transfers Q5 Correct Answer 1",
        questionExplanation: "Safe Transfers Q5 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q5 Good Answer 1",
          "Safe Transfers Q5 Good Answer 2",
          "Safe Transfers Q5 Good Answer 3",
          "Safe Transfers Q5 Good Answer 4",
          "Safe Transfers Q5 Good Answer 5",
          "Safe Transfers Q5 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q5 Bad Answer 1", "Safe Transfers Q5 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q6?",
        questionAnswer: "Safe Transfers Q6 Correct Answer 1",
        questionExplanation: "Safe Transfers Q6 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q6 Good Answer 1",
          "Safe Transfers Q6 Good Answer 2",
          "Safe Transfers Q6 Good Answer 3",
          "Safe Transfers Q6 Good Answer 4",
          "Safe Transfers Q6 Good Answer 5",
          "Safe Transfers Q6 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q6 Bad Answer 1", "Safe Transfers Q6 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q7?",
        questionAnswer: "Safe Transfers Q7 Correct Answer 1",
        questionExplanation: "Safe Transfers Q7 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q7 Good Answer 1",
          "Safe Transfers Q7 Good Answer 2",
          "Safe Transfers Q7 Good Answer 3",
          "Safe Transfers Q7 Good Answer 4",
          "Safe Transfers Q7 Good Answer 5",
          "Safe Transfers Q7 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q7 Bad Answer 1", "Safe Transfers Q7 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q8?",
        questionAnswer: "Safe Transfers Q8 Correct Answer 1",
        questionExplanation: "Safe Transfers Q8 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q8 Good Answer 1",
          "Safe Transfers Q8 Good Answer 2",
          "Safe Transfers Q8 Good Answer 3",
          "Safe Transfers Q8 Good Answer 4",
          "Safe Transfers Q8 Good Answer 5",
          "Safe Transfers Q8 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q8 Bad Answer 1", "Safe Transfers Q8 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q9?",
        questionAnswer: "Safe Transfers Q9 Correct Answer 1",
        questionExplanation: "Safe Transfers Q9 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q9 Good Answer 1",
          "Safe Transfers Q9 Good Answer 2",
          "Safe Transfers Q9 Good Answer 3",
          "Safe Transfers Q9 Good Answer 4",
          "Safe Transfers Q9 Good Answer 5",
          "Safe Transfers Q9 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q9 Bad Answer 1", "Safe Transfers Q9 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q10?",
        questionAnswer: "Safe Transfers Q10 Correct Answer 1",
        questionExplanation: "Safe Transfers Q10 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q10 Good Answer 1",
          "Safe Transfers Q10 Good Answer 2",
          "Safe Transfers Q10 Good Answer 3",
          "Safe Transfers Q10 Good Answer 4",
          "Safe Transfers Q10 Good Answer 5",
          "Safe Transfers Q10 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q10 Bad Answer 1", "Safe Transfers Q10 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q11?",
        questionAnswer: "Safe Transfers Q11 Correct Answer 1",
        questionExplanation: "Safe Transfers Q11 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q11 Good Answer 1",
          "Safe Transfers Q11 Good Answer 2",
          "Safe Transfers Q11 Good Answer 3",
          "Safe Transfers Q11 Good Answer 4",
          "Safe Transfers Q11 Good Answer 5",
          "Safe Transfers Q11 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q11 Bad Answer 1", "Safe Transfers Q11 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q12?",
        questionAnswer: "Safe Transfers Q12 Correct Answer 1",
        questionExplanation: "Safe Transfers Q12 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q12 Good Answer 1",
          "Safe Transfers Q12 Good Answer 2",
          "Safe Transfers Q12 Good Answer 3",
          "Safe Transfers Q12 Good Answer 4",
          "Safe Transfers Q12 Good Answer 5",
          "Safe Transfers Q12 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q12 Bad Answer 1", "Safe Transfers Q12 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q13?",
        questionAnswer: "Safe Transfers Q13 Correct Answer 1",
        questionExplanation: "Safe Transfers Q13 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q13 Good Answer 1",
          "Safe Transfers Q13 Good Answer 2",
          "Safe Transfers Q13 Good Answer 3",
          "Safe Transfers Q13 Good Answer 4",
          "Safe Transfers Q13 Good Answer 5",
          "Safe Transfers Q13 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q13 Bad Answer 1", "Safe Transfers Q13 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q14?",
        questionAnswer: "Safe Transfers Q14 Correct Answer 1",
        questionExplanation: "Safe Transfers Q14 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q14 Good Answer 1",
          "Safe Transfers Q14 Good Answer 2",
          "Safe Transfers Q14 Good Answer 3",
          "Safe Transfers Q14 Good Answer 4",
          "Safe Transfers Q14 Good Answer 5",
          "Safe Transfers Q14 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q14 Bad Answer 1", "Safe Transfers Q14 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q15?",
        questionAnswer: "Safe Transfers Q15 Correct Answer 1",
        questionExplanation: "Safe Transfers Q15 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q15 Good Answer 1",
          "Safe Transfers Q15 Good Answer 2",
          "Safe Transfers Q15 Good Answer 3",
          "Safe Transfers Q15 Good Answer 4",
          "Safe Transfers Q15 Good Answer 5",
          "Safe Transfers Q15 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q15 Bad Answer 1", "Safe Transfers Q15 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q16?",
        questionAnswer: "Safe Transfers Q16 Correct Answer 1",
        questionExplanation: "Safe Transfers Q16 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q16 Good Answer 1",
          "Safe Transfers Q16 Good Answer 2",
          "Safe Transfers Q16 Good Answer 3",
          "Safe Transfers Q16 Good Answer 4",
          "Safe Transfers Q16 Good Answer 5",
          "Safe Transfers Q16 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q16 Bad Answer 1", "Safe Transfers Q16 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q17?",
        questionAnswer: "Safe Transfers Q17 Correct Answer 1",
        questionExplanation: "Safe Transfers Q17 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q17 Good Answer 1",
          "Safe Transfers Q17 Good Answer 2",
          "Safe Transfers Q17 Good Answer 3",
          "Safe Transfers Q17 Good Answer 4",
          "Safe Transfers Q17 Good Answer 5",
          "Safe Transfers Q17 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q17 Bad Answer 1", "Safe Transfers Q17 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q18?",
        questionAnswer: "Safe Transfers Q18 Correct Answer 1",
        questionExplanation: "Safe Transfers Q18 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q18 Good Answer 1",
          "Safe Transfers Q18 Good Answer 2",
          "Safe Transfers Q18 Good Answer 3",
          "Safe Transfers Q18 Good Answer 4",
          "Safe Transfers Q18 Good Answer 5",
          "Safe Transfers Q18 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q18 Bad Answer 1", "Safe Transfers Q18 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q19?",
        questionAnswer: "Safe Transfers Q19 Correct Answer 1",
        questionExplanation: "Safe Transfers Q19 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q19 Good Answer 1",
          "Safe Transfers Q19 Good Answer 2",
          "Safe Transfers Q19 Good Answer 3",
          "Safe Transfers Q19 Good Answer 4",
          "Safe Transfers Q19 Good Answer 5",
          "Safe Transfers Q19 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q19 Bad Answer 1", "Safe Transfers Q19 Bad Answer 2"]
      },
      {
        questionText: "Safe Transfers Q20?",
        questionAnswer: "Safe Transfers Q20 Correct Answer 1",
        questionExplanation: "Safe Transfers Q20 Explanation of Correct Answer",
        questionOptionsGood: [
          "Safe Transfers Q20 Good Answer 1",
          "Safe Transfers Q20 Good Answer 2",
          "Safe Transfers Q20 Good Answer 3",
          "Safe Transfers Q20 Good Answer 4",
          "Safe Transfers Q20 Good Answer 5",
          "Safe Transfers Q20 Good Answer 6"
        ],
        questionOptionsBad: ["Safe Transfers Q20 Bad Answer 1", "Safe Transfers Q20 Bad Answer 2"]
      }
    ]
  }
];

db.Test.remove({})
  .then(() => db.Test.collection.insertMany(testSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
