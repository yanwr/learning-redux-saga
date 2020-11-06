export const ACTION_TYPES = {
    SAGA_GIPHYS: "giphys/SAGA_GIPHYS",
    GIPHYS_LOADING: "giphys/GIPHYS_LOADING",
    GIPHYS_SUCCESS: "giphys/GIPHYS_SUCCESS",
    GIPHYS_FAIL: "giphys/GIPHYS_FAIL",
};

export const ACTIONS = {
    loadGiphys: (filter) => ({ type: ACTION_TYPES.SAGA_GIPHYS, payload: { filter } }),
};