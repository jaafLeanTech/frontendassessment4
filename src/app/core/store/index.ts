import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./models/app.model";
import { personalInfoReducer } from "./reducer/personalinfo.reducer";

export const reducers: ActionReducerMap<AppState> = {
  personalInfo: personalInfoReducer

}
