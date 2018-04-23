import { put, take, fork } from 'redux-saga/effects';
import { Actions } from '../utils/constants';

function* initialState() {
    try {
        yield take(Actions.GET_INITIAL_DATA);
        const data = yield fetch('http://localhost:8080');
        yield put({ type: Actions.SET_INITIAL_DATA, data: yield data.json() });
    } catch (error) {
        console.error(error);
    }
}

function* mainSaga() {
    yield fork(initialState);
}

export default mainSaga;
