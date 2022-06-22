import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResidentialInfoState } from "../models/residentialinfo.model";


const selectResidentialInfoSelector = createFeatureSelector<ResidentialInfoState>("storePersonalInfo")


export const selectResidentialInfo = createSelector(
  selectResidentialInfoSelector,
  (state: ResidentialInfoState) => {
      let residentialData = {
        residentialInfoInitial: {
          userAddress: state.residentialInfoInitial.userAddress,
          userCity: state.residentialInfoInitial.userCity,
          userState: state.residentialInfoInitial.userState,
          userNeighborhood: state.residentialInfoInitial.userNeighborhood
        }
      }
    return residentialData
  }
)
