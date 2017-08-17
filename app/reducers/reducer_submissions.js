import { FETCH_SUBMISSIONS } from '../actions/index';

export default function (state = {}, action){
  switch(action.type){
    case FETCH_SUBMISSIONS:
      return {...state, data: action.payload.data};
  }
  return state;
}

    