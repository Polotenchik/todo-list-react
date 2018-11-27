import { connect } from 'react-redux';
import { Form, message } from 'antd';
import { withRouter } from 'react-router-dom';
import TodoEditForm from '../components/TodoEditForm';
import { updateTodo } from '../actions';

const mapCategoty = ({ id, title, children }) => ({
    key: id.toString(),
    value: id.toString(),
    label: title,
    children: children && children.map(mapCategoty)
});

const mapStateToProps = ({ data }, { match }) => {
    const id = Number(match.params.id);

    return {
        todo: data.present.todos.find(todo => todo.id === id),
        categories: data.present.categories.map(mapCategory),
        startTime: Date.now()
    };
};

const mapDispatchToProps