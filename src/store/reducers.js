import { combineReducers } from 'redux';

import toDoState from '../pages/ToDo/store/reducer';
import toDoDuckState from '../pages/ToDoWithDuck/index.reducer';
import searchState from '../pages/Search/store/reducer';

const rootReducers = combineReducers({
    toDoState,
    toDoDuckState,
    searchState
});

export default rootReducers;