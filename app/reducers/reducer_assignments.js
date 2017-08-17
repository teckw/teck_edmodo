import { FETCH_ASSIGNMENTS, ADD_ASSIGNMENT } from '../actions/index';

export default function (state = {}, action){
  switch(action.type){
    case FETCH_ASSIGNMENTS:
      console.log('here is payload', action.payload.data)
      return {...state, data: action.payload.data};
    case ADD_ASSIGNMENT:
      return {...state, data: action.payload.data};
  }
  return state;
}
