import { FOCUS_RATING_SWITCH } from '../Constants/ConstantsAction'

export const focusRatingSwitch = (id, value) => {
  return {
    type: FOCUS_RATING_SWITCH,
    id,
    value,
  };
};
