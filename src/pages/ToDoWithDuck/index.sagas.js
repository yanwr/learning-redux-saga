import { takeEvery, takeLatest, put, all } from 'redux-saga/effects';
import { ACTION_TYPES } from './index.reducer';
 
function* handleAddTodoWithDuck(action) {
    yield put({ type: ACTION_TYPES.ADD_TODO_DUCK, payload: action.payload });
};

export default function* root() {
    yield all([
        takeEvery(ACTION_TYPES.SAGA_ADD_TODO_DUCK, handleAddTodoWithDuck)
    ]);
};