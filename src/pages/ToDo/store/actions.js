export const ACTION_TYPES = {
    // These actions type are going to heard by SAGA 
    SAGA_ADD_TODO: 'todo/SAGA_ADD_TODO',
    SAGA_GET_TODO: 'todo/SAGA_GET_TODO',
    // These actions types are going to dispatch by SAGA and THIS REDUCER is going to heard
    ADD_TODO_LOADING: 'todo/ADD_TODO_LOADING',
    ADD_TODO: 'todo/ADD_TODO',
    ADD_TODO_FAIL: 'todo/ADD_TODO_FAIL',
    GET_TODO_LOADING: 'todo/GET_TODO_LOADING',
    GET_TODO: 'todo/GET_TODO',
    GET_TODO_FAIL: 'todo/GET_TODO_FAIL',
};

export const ACTIONS = {   // In actions I dispatch a type that SAGA is gonna heard
    addTodo: (title) => ({ type: ACTION_TYPES.SAGA_ADD_TODO, payload: title }),
    getTodos: () => ({ type: ACTION_TYPES.SAGA_GET_TODO }),
};

export function addTodoWithOutSaga(title) {
    return {
        type: ACTION_TYPES.ADD_TODO,
        payload: {id: Math.random(), title: title + " Item NO SAGAS "},
    };
};