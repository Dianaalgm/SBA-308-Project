// courseinfoObject////
const courseInfo = {
    id: 1,
    name: "Foundamentals of JavaScript"
};
// AssignmentGroup Object///
const assignmentGroup = {
    id: 1,
    name: "Homework",
    course_id: 1,
    group_weight: 0.5,
    assignments: [
        { id: 1, name: "Assignment 1", due_at: "03.25.2024", points_possible: 100 },
        { id: 2, name: "Assignment 2", due_at: "04.01.2024", points_possible: 200 }
    ]
};
// console.log(assignments)

const learnerSubmissions = [
    { learner_id: 10, assignment_id: 1, submission: { submitted_at: "03.25.2024", score: 90 } },
    { learner_id: 10, assignment_id: 2, submission: { submitted_at: "03.30.2024", score: 180 } },
    { learner_id: 20, assignment_id: 1, submission: { submitted_at: "03.26.2024", score: 70 } },
    { learner_id: 20, assignment_id: 2, submission: { submitted_at: "04.01.2024", score: 90 } },


];

 // To calculate weighted average
function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {  
    function calculateWeightedAverage(scores) {
        let totalScore = 0;
        let totalWeight = 0;
        for (const assignmentId in scores) {
            const score = scores[assignmentId];
            const weight = assignmentWeights[assignmentId];
            totalScore += score * weight;
            totalWeight += weight;
        }
        return totalWeight > 0 ? totalScore / totalWeight : 0;
    }

console.log(totalWeight)



// end of code---------------------------------------------------------------
// function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
// --------------------------------------------------------------------
  


  

{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    {/* // if an assignment is not yet due, it should not be included in either */}
    {/* // the average or the keyed dictionary of scores */}
}


// function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
   
   
//     const learnerArray = [{}, {}]; // Initialize an array with two empty objects to store the results
  
//     // Learner ID's for each
//     for (let i = 0; i < LearnerSubmissions.length; i++) {
//       const submission = LearnerSubmissions[i];
  
//       if (submission.learner_id === 125) {
//         learnerArray[0]["id"] = submission.learner_id;
//       }
//       if (submission.learner_id === 132) {
//         learnerArray[1]["id"] = submission.learner_id;
//       }
//     }
  
//     // Calculate average score for each learner
//     for (let i = 0; i < LearnerSubmissions.length; i++) {
//       const submission = LearnerSubmissions[i];
//       const assignment = AssignmentGroup.assignments[0,1];
  
//       if (assignment && (assignment.id === 1 || assignment.id === 2)) {
//         if (submission.learner_id === 125) {
//           learnerArray[0]["avg"] = ((learnerArray[0]["avg"] || 0) + submission.submission.score) / 2;
//         }
//         if (submission.learner_id === 132) {
//           learnerArray[1]["avg"] = ((learnerArray[1]["avg"] || 0) + submission.submission.score) / 2;
//         }
//       }
//     }
  
//     return learnerArray;
//   }
  
//   const learnerArray = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
//   console.log(learnerArray);