import { SAVE_JOBS_LIST } from "./listing.actions";

export default (
  state = {
    show404: false,
    showError: false,
    jobsList: [],
    showCustomToast: false,
    customMessage: ""
  },
  action
) => {
  switch (action.type) {
    case SAVE_JOBS_LIST: {
      return {
        ...state,
        jobsList: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
