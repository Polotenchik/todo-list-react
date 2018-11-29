import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodBar from '../containers/TodoBar';

const TodoColumn = () => (
    <div>
        <TadoBar />
        <div className='todo-list'>
            <VisibleTodoList />
        </div>
    </div>
);

export default TodoColumn;