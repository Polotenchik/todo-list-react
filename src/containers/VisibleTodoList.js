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
    
    return todos.filter(todo => showDone || todo.completed).sort((a,b) => a.completed === b.completed ? a.id < b.id : a.completed)
};

const mapStateToProps = ({data}, {location}) => {
    const allTodos = filterByCategoryAndTitle(data.present.todos, location.search);

    return  {
        todos: getVisibleTodos(allTodos, location.search);
        numberOfAll: allTodos.length
    };
};

const mapDispatchToProps = dispatch => ({
    onClick: id => {
        dispatch(toggleTodo(id))
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));