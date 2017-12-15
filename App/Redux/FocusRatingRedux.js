import { createReducer } from 'reduxsauce'
import {
  FOCUS_RATING_SWITCH,
} from '../Constants/ConstantsAction';

const FOCUS_RATING_LIST = [true, true, true, false]

export const setSwitch = (state = INITIAL_STATE, action) => {
  let newFocusRating = [...state.ratingList];
  newFocusRating[action.id] = action.value;
  return { ...state, ratingList: newFocusRating  }
}

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  ratingList: FOCUS_RATING_LIST,
}

export const HANDLERS = {
  [FOCUS_RATING_SWITCH]: setSwitch,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
