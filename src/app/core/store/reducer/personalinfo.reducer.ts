import { Action, createReducer, on } from "@ngrx/store";
import { PersonalInfoState } from "../models/personainfo.model";
import { setPersonalInfo } from "../actions/personalinfo.action";

const initialState: PersonalInfoState = {
  personalInfoInitial: {
    firstName: '',
    lastName: '',
    userAge: '',
    userEmail: '',
    userTN: ''
  }
};

const _personalInfoReducer = createReducer(initialState,
  on(setPersonalInfo, (state, { personalInfo }) => ({...state,
    personalInfoInitial: personalInfo
  }))
);

export function personalInfoReducer (state: PersonalInfoState | undefined, action: Action) {
  return _personalInfoReducer(state, action)
}
