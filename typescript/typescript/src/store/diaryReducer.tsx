import { IDiary } from "../component/global";

interface actionType {
  type : string;
  id : number;
  payload: IDiary;
}

const diaryReducer = ( state:IDiary[] = [], action: actionType) => {
  if (action.type === "DIARY/WRITE") {
    state = [...state, action.payload];
  } else if (action.type === "DIARY/DELETE") {
    state = state.filter((diary) => diary.id != action.id);
  }

  return state;
};
export default diaryReducer;
