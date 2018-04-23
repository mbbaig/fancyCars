import { Actions } from '../utils/constants';

export const getData = () => ({
    type: Actions.GET_INITIAL_DATA,
});

export const setData = data => ({
    type: Actions.SET_INITIAL_DATA,
    data,
});

export const setFilter = filter => ({
    type: Actions.SET_FILTER,
    filter,
});
