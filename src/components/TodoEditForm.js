import React, { Component } from 'react';
import { Form, Input, Switch, TreeSelect, Button } from 'antd';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';

const FormItem = Form.Item;
const TreeNode = TreeSelect.TreeNode;
const { TextArea } = Input;

const formItemLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 17 },
};

class TodoEditForm extends Component {
    
    state = {
        changed: false
    };

    componentWillReceiveProps(nextProps) {
        const { form, todo } = nextProps;

        if (form.isFieldsTouched()) {
            const values = this.convertFormValues(form.getFieldsValue());

            const isChanged = todo.title !== values.title 
                || todo.completed !== values.completed 
                || todo.category !== Number(values.category)
                || todo.description !== values.description.trim();
            
            this.setState({ changed : isChanged });
        }
    }

    

}