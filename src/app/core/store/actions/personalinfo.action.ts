import { createAction, props } from "@ngrx/store";
import { PersonalInfoInterface } from "@app-models/interfaces";

export const setPersonalInfo = createAction(
  '[Personal Information] Set personal information',
  props<{ personalInfo: PersonalInfoInterface }>()
)
