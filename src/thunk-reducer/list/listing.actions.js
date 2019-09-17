import moment from "moment";
import { changeKeys } from "../../utils/helperMethods";

export const SAVE_JOBS_LIST = "[jobList] saveFetchedJobList";

export const saveFetchedJobList = jobsList => dispatch => {
  let newData = changeKeys(jobsList); //To convert everything to camelcase for cleaner code.

  newData = jobsList.map(list => {
    if (list.timeOfPost) {
      var date = moment(list.timeOfPost);
      if (moment().diff(date, "days") >= 2) {
        date = date.fromNow(); // hours convention
      } else {
        date = date.calendar().split(" ")[0]; // days convention
      }
      list.timeOfPost = date;
      return list;
    }
  });

  dispatch({
    type: SAVE_JOBS_LIST,
    payload: newData
  });
};
