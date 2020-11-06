import { fork, all } from 'redux-saga/effects';
import toDoSaga from '../pages/ToDo/store/saga';
import toDoDuckSaga from '../pages/ToDoWithDuck/index.sagas';
import searchSaga from '../pages/Search/store/saga';

export default function* rootSagas() {
    yield all([
        fork(toDoSaga),
        fork(toDoDuckSaga),
        fork(searchSaga),
    ]);
};