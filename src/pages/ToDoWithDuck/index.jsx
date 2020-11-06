import React from 'react';
import { handleAddTodoSaga, handleAddTodoThunk } from './index.reducer';
import { connect } from 'react-redux';

function ToDoPageWithDuck({ todosWithDuck, handleAddTodoSaga, handleAddTodoThunk }) {
    return (
        <ul>
            <li><h1>ToDo with DUCK</h1></li>
            {
                todosWithDuck.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
            <button onClick={() => handleAddTodoSaga('New ToDo Duck SAGA')}> New toDo Duck SAGA</button>
            <button onClick={() => handleAddTodoThunk('New ToDo Duck THUNK')}> New toDo Duck</button>
        </ul>
    );
};

const mapStateToProps = ({ toDoDuckState }) => ({
    todosWithDuck: toDoDuckState.todosWithDuck,
});

const mapDispatchToProps = {
    handleAddTodoSaga,
    handleAddTodoThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPageWithDuck);