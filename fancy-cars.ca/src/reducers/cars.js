// import { Actions, SortFilters } from '../utils/constants';
import InitState from '../utils/MOCK_DATA.json';

const cars = (state = InitState, action) => {
    switch (action.type) {
    // case Actions.SORT_LIST:
    //     if (action.filter === SortFilters.NAME) {
    //         return state.map(car => car.name).sort();
    //     }
    //     return state.filter(car => car.availability === action.filter);
    default:
        return state;
    }
};

export default cars;
