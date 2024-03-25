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
};console.log(assignmentGroup.assignments)

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
