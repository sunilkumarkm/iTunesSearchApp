import {ACTIONS} from '../../api/apiConstant';

export const fetchItemList = (payload) => {
  return {
    type: ACTIONS.GET_ITEM_LIST_REQUEST,
    payload,
  };
};
