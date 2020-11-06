export const ACTION_TYPES = {
    ADD_TODO_DUCK_LOADING: 'todoWithDuck/ADD_TODO_DUCK_LOADING',
    ADD_TODO_DUCK: 'todoWithDuck/ADD_TODO_DUCK',
    ADD_TODO_DUCK_FAIL: 'todoWithDuck/ADD_TODO_DUCK_FAIL',

    SAGA_ADD_TODO_DUCK_LOADING: 'todoWithDuck/SAGA_ADD_TODO_DUCK_LOADING',
    SAGA_ADD_TODO_DUCK: 'todoWithDuck/SAGA_ADD_TODO_DUCK',
    SAGA_ADD_TODO_DUCK_FAIL: 'todoWithDuck/SAGA_ADD_TODO_DUCK_FAIL',
};

const INITIAL_STATE = {
    todosWithDuck: [],
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO_DUCK_LOADING:
            return { ...state, loading: true };
        case ACTION_TYPES.ADD_TODO_DUCK:
            const _arr = [...state.todosWithDuck, { id: Math.random(), title: action.payload}];
            return { 
                ...state, 
                loading: false, 
                todosWithDuck: _arr
            };
        case ACTION_TYPES.ADD_TODO_DUCK_FAIL:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export const handleAddTodoSaga = (title) => {
    return {
        type: ACTION_TYPES.SAGA_ADD_TODO_DUCK,
        payload: title,
    };
};

export const handleAddTodoThunk = (title) => dispatch => {
    dispatch({
        type: ACTION_TYPES.ADD_TODO_DUCK,
        payload: title,
    });
};