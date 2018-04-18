import { connect } from 'react-redux';
import { SortFilters } from '../../utils/constants';
import { sortList, setFilter } from '../../actions';
import CardList from '../../components/list/CardList';

const mapStateToProps = state => ({
    cars: state.cars,
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
