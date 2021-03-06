import defaultState from "../state/state";
import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const reducer = (state = defaultState, action) => {
  const fetchCategory = (state, action) => {
    // const updatedState = {state.categories};
    return updateObject(state, state.categories);
  };

  const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
  };

  switch (action.type) {
    // case actionTypes.DEACTIVATE_CATEGORY:
    //   return disableCategory(state, action);
    case actionTypes.FETCH_CATEGORY:
      return fetchCategory(state, action);
    // case actionTypes.FETCH_CATEGORY_FAILED:
    //   return fetchCategoryFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
