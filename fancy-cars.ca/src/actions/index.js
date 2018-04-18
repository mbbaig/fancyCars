import { Actions } from '../utils/constants';

export const sortList = filter => ({
    type: Actions.SORT_LIST,
    filter,
});

export const setFilter = filter => ({
    type: Actions.SET_FILTER,
    filter,
});
