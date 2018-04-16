import { Actions } from '../utils/constants';

const sort = (state = [], action) => {
    switch (action.type) {
    case Actions.SORT_BY_NAME:
        return state.map(car => car.name).sort();
    case Actions.SORT_BY_AVAILABILITY:
        return state.filter(car => car.availability === action.filter);
    default:
        return state;
    }
};

export default sort;
