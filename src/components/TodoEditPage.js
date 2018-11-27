import React from 'react';
import { Row, Col, Icon, Layout } from 'antd';
import TodoEditForm from '../containers/TodoEditForm';
import PropTypes from 'prop-types';

TodoEditPage.PropTypes = {
    history: PropTypes.shape({
        goBack: PropTypes.func.isRequired
    })
};

const { Header, Content } = Layout;

const TodoEditPage = ({ history }) => (
    <Layout>
        <Header>

        </Header>
        <Content>
            
        </Content>
    </Layout>
)