import { ACTION_TYPES } from './actions';

const INITIAL_STATE = {
    giphys:[],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.GIPHYS_LOADING:
            return { ...state, loading: true };
        case ACTION_TYPES.GIPHYS_SUCCESS:
            return { ...state, loading: false, giphys: action.payload};
        case ACTION_TYPES.GIPHYS_FAIL:
            return { ...state, loading: false };
        default:
            return state;
    };
};