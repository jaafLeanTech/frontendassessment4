import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./models/app.model";
import { personalInfoReducer } from "./reducer/personalinfo.reducer";
import { residentialInfoReducer } from "./reducer/residentialinfo.reducer";

export const reducers: ActionReducerMap<AppState> = {
  personalInfo: personalInfoReducer,
  residentialInfo: residentialInfoReducer
}
