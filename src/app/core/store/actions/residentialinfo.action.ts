import { createAction, props } from "@ngrx/store";
import { ResidentialInfoInterface } from "@app-models/interfaces";

export const setResidentialInfo = createAction(
  '[Residential Information] Set residential information',
  props<{ residentialInfo: ResidentialInfoInterface }>()
)
