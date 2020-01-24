const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Tests collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testportal");

const testSeed = [
  {
    testName: "HIPAA",
    testCategory: "safety",
    testRequired: true,
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText: "HIPAA Q1?",
        questionAnswer: "HIPAA Q1 Correct Answer 1",
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
        questionAnswer: "HIPAA Q1 Correct Answer 13",
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
    testName: "Activities of Daily Living",
    testCategory: "Health",
    testRequired: true,
    testCreatedBy: "Lizzy",
    testCreatedDate: new Date(2019, 6, 1),
    testQuestions: [
      {
        questionText: "Activities of Daily Living Q1?",
        questionAnswer: "Activities of Daily Living Q1 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q1 Good Answer 1",
          "Activities of Daily Living Q1 Good Answer 2",
          "Activities of Daily Living Q1 Good Answer 3",
          "Activities of Daily Living Q1 Good Answer 4",
          "Activities of Daily Living Q1 Good Answer 5",
          "Activities of Daily Living Q1 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q1 Bad Answer 1",
          "Activities of Daily Living Q1 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q2?",
        questionAnswer: "Activities of Daily Living Q2 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q2 Good Answer 1",
          "Activities of Daily Living Q2 Good Answer 2",
          "Activities of Daily Living Q2 Good Answer 3",
          "Activities of Daily Living Q2 Good Answer 4",
          "Activities of Daily Living Q2 Good Answer 5",
          "Activities of Daily Living Q2 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q2 Bad Answer 1",
          "Activities of Daily Living Q2 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q3?",
        questionAnswer: "Activities of Daily Living Q3 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q3 Good Answer 1",
          "Activities of Daily Living Q3 Good Answer 2",
          "Activities of Daily Living Q3 Good Answer 3",
          "Activities of Daily Living Q3 Good Answer 4",
          "Activities of Daily Living Q3 Good Answer 5",
          "Activities of Daily Living Q3 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q3 Bad Answer 1",
          "Activities of Daily Living Q3 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q4?",
        questionAnswer: "Activities of Daily Living Q4 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q4 Good Answer 1",
          "Activities of Daily Living Q4 Good Answer 2",
          "Activities of Daily Living Q4 Good Answer 3",
          "Activities of Daily Living Q4 Good Answer 4",
          "Activities of Daily Living Q4 Good Answer 5",
          "Activities of Daily Living Q4 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q4 Bad Answer 1",
          "Activities of Daily Living Q4 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q5?",
        questionAnswer: "Activities of Daily Living Q5 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q5 Good Answer 1",
          "Activities of Daily Living Q5 Good Answer 2",
          "Activities of Daily Living Q5 Good Answer 3",
          "Activities of Daily Living Q5 Good Answer 4",
          "Activities of Daily Living Q5 Good Answer 5",
          "Activities of Daily Living Q5 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q5 Bad Answer 1",
          "Activities of Daily Living Q5 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q6?",
        questionAnswer: "Activities of Daily Living Q6 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q6 Good Answer 1",
          "Activities of Daily Living Q6 Good Answer 2",
          "Activities of Daily Living Q6 Good Answer 3",
          "Activities of Daily Living Q6 Good Answer 4",
          "Activities of Daily Living Q6 Good Answer 5",
          "Activities of Daily Living Q6 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q6 Bad Answer 1",
          "Activities of Daily Living Q6 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q7?",
        questionAnswer: "Activities of Daily Living Q7 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q7 Good Answer 1",
          "Activities of Daily Living Q7 Good Answer 2",
          "Activities of Daily Living Q7 Good Answer 3",
          "Activities of Daily Living Q7 Good Answer 4",
          "Activities of Daily Living Q7 Good Answer 5",
          "Activities of Daily Living Q7 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q7 Bad Answer 1",
          "Activities of Daily Living Q7 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q8?",
        questionAnswer: "Activities of Daily Living Q8 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q8 Good Answer 1",
          "Activities of Daily Living Q8 Good Answer 2",
          "Activities of Daily Living Q8 Good Answer 3",
          "Activities of Daily Living Q8 Good Answer 4",
          "Activities of Daily Living Q8 Good Answer 5",
          "Activities of Daily Living Q8 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q8 Bad Answer 1",
          "Activities of Daily Living Q8 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q9?",
        questionAnswer: "Activities of Daily Living Q9 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q9 Good Answer 1",
          "Activities of Daily Living Q9 Good Answer 2",
          "Activities of Daily Living Q9 Good Answer 3",
          "Activities of Daily Living Q9 Good Answer 4",
          "Activities of Daily Living Q9 Good Answer 5",
          "Activities of Daily Living Q9 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q9 Bad Answer 1",
          "Activities of Daily Living Q9 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q10?",
        questionAnswer: "Activities of Daily Living Q10 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q10 Good Answer 1",
          "Activities of Daily Living Q10 Good Answer 2",
          "Activities of Daily Living Q10 Good Answer 3",
          "Activities of Daily Living Q10 Good Answer 4",
          "Activities of Daily Living Q10 Good Answer 5",
          "Activities of Daily Living Q10 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q10 Bad Answer 1",
          "Activities of Daily Living Q10 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q11?",
        questionAnswer: "Activities of Daily Living Q11 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q11 Good Answer 1",
          "Activities of Daily Living Q11 Good Answer 2",
          "Activities of Daily Living Q11 Good Answer 3",
          "Activities of Daily Living Q11 Good Answer 4",
          "Activities of Daily Living Q11 Good Answer 5",
          "Activities of Daily Living Q11 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q11 Bad Answer 1",
          "Activities of Daily Living Q11 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q12?",
        questionAnswer: "Activities of Daily Living Q12 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q12 Good Answer 1",
          "Activities of Daily Living Q12 Good Answer 2",
          "Activities of Daily Living Q12 Good Answer 3",
          "Activities of Daily Living Q12 Good Answer 4",
          "Activities of Daily Living Q12 Good Answer 5",
          "Activities of Daily Living Q12 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q12 Bad Answer 1",
          "Activities of Daily Living Q12 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q13?",
        questionAnswer: "Activities of Daily Living Q13 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q13 Good Answer 1",
          "Activities of Daily Living Q13 Good Answer 2",
          "Activities of Daily Living Q13 Good Answer 3",
          "Activities of Daily Living Q13 Good Answer 4",
          "Activities of Daily Living Q13 Good Answer 5",
          "Activities of Daily Living Q13 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q13 Bad Answer 1",
          "Activities of Daily Living Q13 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q14?",
        questionAnswer: "Activities of Daily Living Q14 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q14 Good Answer 1",
          "Activities of Daily Living Q14 Good Answer 2",
          "Activities of Daily Living Q14 Good Answer 3",
          "Activities of Daily Living Q14 Good Answer 4",
          "Activities of Daily Living Q14 Good Answer 5",
          "Activities of Daily Living Q14 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q14 Bad Answer 1",
          "Activities of Daily Living Q14 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q15?",
        questionAnswer: "Activities of Daily Living Q15 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q15 Good Answer 1",
          "Activities of Daily Living Q15 Good Answer 2",
          "Activities of Daily Living Q15 Good Answer 3",
          "Activities of Daily Living Q15 Good Answer 4",
          "Activities of Daily Living Q15 Good Answer 5",
          "Activities of Daily Living Q15 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q15 Bad Answer 1",
          "Activities of Daily Living Q15 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q16?",
        questionAnswer: "Activities of Daily Living Q16 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q16 Good Answer 1",
          "Activities of Daily Living Q16 Good Answer 2",
          "Activities of Daily Living Q16 Good Answer 3",
          "Activities of Daily Living Q16 Good Answer 4",
          "Activities of Daily Living Q16 Good Answer 5",
          "Activities of Daily Living Q16 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q16 Bad Answer 1",
          "Activities of Daily Living Q16 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q17?",
        questionAnswer: "Activities of Daily Living Q17 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q17 Good Answer 1",
          "Activities of Daily Living Q17 Good Answer 2",
          "Activities of Daily Living Q17 Good Answer 3",
          "Activities of Daily Living Q17 Good Answer 4",
          "Activities of Daily Living Q17 Good Answer 5",
          "Activities of Daily Living Q17 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q17 Bad Answer 1",
          "Activities of Daily Living Q17 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q18?",
        questionAnswer: "Activities of Daily Living Q18 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q18 Good Answer 1",
          "Activities of Daily Living Q18 Good Answer 2",
          "Activities of Daily Living Q18 Good Answer 3",
          "Activities of Daily Living Q18 Good Answer 4",
          "Activities of Daily Living Q18 Good Answer 5",
          "Activities of Daily Living Q18 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q18 Bad Answer 1",
          "Activities of Daily Living Q18 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q19?",
        questionAnswer: "Activities of Daily Living Q19 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q19 Good Answer 1",
          "Activities of Daily Living Q19 Good Answer 2",
          "Activities of Daily Living Q19 Good Answer 3",
          "Activities of Daily Living Q19 Good Answer 4",
          "Activities of Daily Living Q19 Good Answer 5",
          "Activities of Daily Living Q19 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q19 Bad Answer 1",
          "Activities of Daily Living Q19 Bad Answer 2"
        ]
      },
      {
        questionText: "Activities of Daily Living Q20?",
        questionAnswer: "Activities of Daily Living Q20 Correct Answer 1",
        questionOptionsGood: [
          "Activities of Daily Living Q20 Good Answer 1",
          "Activities of Daily Living Q20 Good Answer 2",
          "Activities of Daily Living Q20 Good Answer 3",
          "Activities of Daily Living Q20 Good Answer 4",
          "Activities of Daily Living Q20 Good Answer 5",
          "Activities of Daily Living Q20 Good Answer 6"
        ],
        questionOptionsBad: [
          "Activities of Daily Living Q20 Bad Answer 1",
          "Activities of Daily Living Q20 Bad Answer 2"
        ]
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
