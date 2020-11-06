import React, {useEffect} from 'react';
import { ACTIONS, addTodoWithOutSaga } from './store/actions'
import { connect } from 'react-redux';

function ToDoPage({loading, todos, addTodo, getTodos, addTodoWithOutSaga }) {

    useEffect(() => {
        getTodos();
    }, []);

    if(loading){
        return <p>Loading datas ...</p>
    }
    return (
        <ul>
            <li><h1>ToDo NO DUCK</h1></li>
            {
                todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
            <button onClick={() => addTodo('ADD')}> New toDo SAGA</button>
            <button onClick={() => addTodoWithOutSaga('ToDo')}> New toDo </button>
        </ul>
    );
};

const mapStateToProps = ({ toDoState }) => ({
    todos: toDoState.todos,
    loading: toDoState.loading
});

const mapDispatchToProps = {
    addTodo: ACTIONS.addTodo,
    getTodos: ACTIONS.getTodos,
    addTodoWithOutSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);