import { Actions } from '../utils/constants';

const filter = (state = 'NONE', action) => {
    switch (action.type) {
    case Actions.SET_FILTER:
        return action.filter;
    default:
        return state;
    }
};

export default filter;
