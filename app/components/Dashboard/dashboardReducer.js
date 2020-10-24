import {ACTIONS} from '../../api/apiConstant';

const initialState = {
  loading: false,
  error: null,
  itemList: [],
};

export const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ITEM_LIST_REQUEST:
      return {...state, loading: true};
    case ACTIONS.GET_ITEM_LIST_SUCCESS:
      return {...state, loading: false, itemList: action.data.results};
    case ACTIONS.GET_ITEM_LIST_ERROR:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};
