import axios from 'axios';

export const FETCH_ASSIGNMENTS = 'FETCH_ASSIGNMENTS';
export const FETCH_SUBMISSIONS = 'FETCH_SUBMISSIONS';
export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';

const API_KEY = '12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d'

//Get Assignments URL
const getAssignments = `https://api.edmodo.com/assignments?access_token=${API_KEY}`

// To get all the assignments
export function fetchAssignments() {
  return function(dispatch) {
    axios.get(getAssignments)
    .then(response => {
      dispatch({
        type: FETCH_ASSIGNMENTS,
        payload: response,
      });
    });
  };
}

// Add to assignments 
export function addAssignment(title, description, dueDate, assignments){

  let newAssignment = {
    title: title,
    description: description,
    due_at: dueDate,
    id: Math.floor(Math.random() * 100000)
  }

  assignments.push(newAssignment);
  let obj = {};
  obj.data = assignments;

  return function(dispatch) {
    dispatch({
      type: ADD_ASSIGNMENT,
      payload: obj,
    });
  };
}


// Get the submissions
export function fetchSubmissions(id) {
  const getSubmission = `https://api.edmodo.com/assignment_submissions?assignment_id=${id}&assign
  ment_creator_id=73240721&access_token=${API_KEY}`

  return function(dispatch){
    axios.get(getSubmission)
    .then(response => {
      dispatch({
        type: FETCH_SUBMISSIONS,
        payload: response,
      })
    })
  }

}




