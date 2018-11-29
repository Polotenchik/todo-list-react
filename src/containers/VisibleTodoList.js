import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import { getFilter, getShowDone } from '../utils/query';
import TodoList from '../components/ TodoList';

const filterByCategoryAndTitle = (todos, query) => {
    const { category, title } = getFilter(query);

    return todos.filter(todo => todo.category === category).filter(todo => todo.title.includes(title || ''));
};

const getVisibleTodos = (todos, search) => {
    const showDone = getShowDone(search);
    ...
}