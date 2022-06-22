import { Action, createReducer, on } from "@ngrx/store";
import { ResidentialInfoState } from "../models/residentialinfo.model";
import { setResidentialInfo } from "../actions/residentialinfo.action";

const initialState: ResidentialInfoState = {
  residentialInfoInitial: {
    userAddress: '',
    userNeighborhood: '',
    userState: '',
    userCity: '',
  }
};

const _residentialInfoReducer = createReducer(initialState,
  on(setResidentialInfo, (state, { residentialInfo }) => ({...state, residentialInfoInitial: residentialInfo}))
);

export function residentialInfoReducer (state: ResidentialInfoState | undefined, action: Action) {
  return _residentialInfoReducer(state, action)
}
