import { defaultState } from "../state/state";
import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const reducer = (state = defaultState, action) => {
  const selectCategory = (state, action) => {
    const updatedCategory = {
      [action.categoryName]: (state.categories[
        action.categoryName
      ].active = !state.categories[action.categoryName].active),
    };
    const updatedCategories = updateObject(state.categories, updatedCategory);
    const updatedState = {
      deselectCategories: updatedCategories,
    };

    return updateObject(state, updatedState);
  };

  const initCategories = (state, action) => {
    return updateObject(state, state.categories);
  };

  const fetchCategoryFailed = (state, action) => {
    return updateObject(state, { error: true });
  };

  switch (action.type) {
    case actionTypes.ADD_CATEGORY_SELECTION:
      return selectCategory(state, action);
    case actionTypes.INIT_CATEGORIES:
      return initCategories(state, action);
    case actionTypes.FETCH_CATEGORY_FAILED:
      return fetchCategoryFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
