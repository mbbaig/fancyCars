import { Actions } from '../utils/constants';

export const sortByName = () => ({
    type: Actions.SORT_BY_NAME,
});

export const sortByAvailability = filter => ({
    type: Actions.SORT_BY_AVAILABILITY,
    filter,
});
