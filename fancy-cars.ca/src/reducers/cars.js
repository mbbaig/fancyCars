
import { Actions } from '../utils/constants';

const cars = (state = [], action) => {
    switch (action.type) {
    case Actions.SET_INITIAL_DATA:
        return action.data;
    default:
        return state;
    }
};

export default cars;
