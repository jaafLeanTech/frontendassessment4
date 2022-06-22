import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonalInfoState } from "../models/personainfo.model";


const selectPersonalInfoSelector = createFeatureSelector<PersonalInfoState>("storePersonalInfo")


export const selectPersonalInfo = createSelector(
  selectPersonalInfoSelector,
  (state: PersonalInfoState) =>
  {
      let personalData = {
        personalInfoInitial: {
          firstName: state.personalInfoInitial.firstName,
          lastName: state.personalInfoInitial.lastName,
          userAge: state.personalInfoInitial.userAge,
          userEmail: state.personalInfoInitial.userEmail,
          userTN: state.personalInfoInitial.userTN
        }
      }
    return personalData
  }
);
