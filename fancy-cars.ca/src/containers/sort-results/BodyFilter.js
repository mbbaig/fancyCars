import { connect } from 'react-redux';
import { SortFilters } from '../../utils/constants';
import { sortList, setFilter } from '../../actions';
import CardList from '../../components/list/CardList';

const filterCars = (cars, filter) => {
    switch (filter) {
    case SortFilters.NAME:
        return cars.slice().sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    case SortFilters.IN_DEALERSHIP:
    case SortFilters.OUT_OF_STOCK:
    case SortFilters.UNAVAILABLE:
        return cars.filter(car => car.availability === filter);
    default:
        return cars;
    }
};

const mapStateToProps = state => ({
    cars: filterCars(state.cars, state.filter),
    filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
    filterAction: (e) => {
        e.preventDefault();
        dispatch(setFilter(e.target.value));
        dispatch(sortList(e.target.value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
