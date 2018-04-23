import { connect } from 'react-redux';
import App from '../../components/app/App';
import { getData } from '../../actions';

const mapDispatchToProps = dispatch => ({
    loadData: () => {
        dispatch(getData());
    },
});

export default connect(null, mapDispatchToProps)(App);
