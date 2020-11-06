import { takeEvery, takeLatest, put, all, call, select } from 'redux-saga/effects';
// takeEvery - Hear EVERY action with that TYPE and execute. 
// takeLatest - Hear the last action with that TYPE and execute.
// put - Distpach values to REDUCER 
// call - Call endpoints, API call, 
// select - get State from Store, it looks like 'getStore' from Redux Thunk
import { ACTION_TYPES as TODO_TYPES } from './actions';

const api = {
    post: (body) => {
        return new Promise((resolve, reject) => {
            const { count } = body;
            setTimeout(() => {
                resolve({ data: { id: count + 1, title: 'ToDo SAGA Item from Api ' + body.title + ' ' + (count + 1) }});
            }, 2000);
        });
    },
    get: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: [
                    {id: 1, title: 'ToDo SAGA Item from Api 1'},
                    {id: 2, title: 'ToDo SAGA Item from Api 2'},
                    {id: 3, title: 'ToDo SAGA Item from Api 3'},
                    {id: 4, title: 'ToDo SAGA Item from Api 4'},
                    {id: 5, title: 'ToDo SAGA Item from Api 5'},
                    {id: 6, title: 'ToDo SAGA Item from Api 6'},
                ]});
            }, 2000);
        });
    },
}

// Always the function will receive ACTION where it have PAYLOAD with data.
function* handleAddTodo(action) {
    yield put({ type: TODO_TYPES.ADD_TODO_LOADING });
    try {
        const { toDoState } = yield select(state => state);
        // First parameter is the function and after is parameter's function
        const body = { title: action.payload, count: toDoState.todos.length };
        const response = yield call(api.post, body);
        yield put({ type: TODO_TYPES.ADD_TODO, payload: response.data });
    } catch (e) {
        yield put({ type: TODO_TYPES.ADD_TODO_FAIL });
    }
};

function* handleGetTodos() {
    yield put({ type: TODO_TYPES.GET_TODO_LOADING });
    try {
        const response = yield call(api.get);
        yield put({ type: TODO_TYPES.GET_TODO, payload: response.data });
    } catch (e) {
        yield put({ type: TODO_TYPES.GET_TODO_FAIL });
    }
};

export default function* root() {
    // Hear function from actions and. do this function.
    yield all([
        takeLatest(TODO_TYPES.SAGA_ADD_TODO, handleAddTodo),
        takeEvery(TODO_TYPES.SAGA_GET_TODO, handleGetTodos)
    ]);
};