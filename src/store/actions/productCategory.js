import * as actionTypes from "./actionTypes";

export const selectCategory = (name) => {
  return {
    type: actionTypes.ADD_CATEGORY_SELECTION,
    categoryName: name,
  };
};

export const initCategories = () => {
  return {
    type: actionTypes.INIT_CATEGORIES,
  };
};
