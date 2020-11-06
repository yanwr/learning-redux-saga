import { all, takeLatest, put, call } from 'redux-saga/effects';
import { ACTION_TYPES } from './actions';
import Api from '../../../services/api/apiGiphy';

function* loadGiphys({ payload }) {
    yield put({ type: ACTION_TYPES.GIPHYS_LOADING });
    try {
        const API_KEY = "tcmvIlUI8cwm7SYnllDvcaFw8DMaTdJw";
        const finalURL = `/search?api_key=${API_KEY}&q=${payload.filter}&limit=20`;
        const response = yield call(Api.get, finalURL);
        const data = response.data.data.map( x => x.images.original);
        console.log(data);
        yield put({ type: ACTION_TYPES.GIPHYS_SUCCESS, payload: data });
    } catch (e) {
        console.error(e);
        yield put({ type: ACTION_TYPES.GIPHYS_FAIL });
    }
};

export default function* root() {
    yield all([yield takeLatest(ACTION_TYPES.SAGA_GIPHYS, loadGiphys)]);
};