import { ACTION_TYPES } from './actions';

const INITIAL_STATE = {
    todos: [],
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // These action are dispatched by SAGA
        case ACTION_TYPES.ADD_TODO_LOADING:
        case ACTION_TYPES.GET_TODO_LOADING:
            return { ...state, loading: true };
        case ACTION_TYPES.ADD_TODO:
            return { 
                ...state, 
                loading: false, 
                todos: [ ...state.todos, action.payload]
            };
        case ACTION_TYPES.GET_TODO:
            return {...state, todos: action.payload, loading: false };
        case ACTION_TYPES.ADD_TODO_FAIL:
        case ACTION_TYPES.GET_TODO_FAIL:
            return {...state, loading: false };
        default:
            return state;
    }
};