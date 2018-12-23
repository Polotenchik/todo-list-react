import React from 'react';
import { Row, Col, Icon, Layout, Button } from 'antd';
import PropTypes from 'prop-types';
import TodoEditForm from '../containers/CategoriesTree';
import TodoColumn from './TodoColumn';

const { Header, Content } = Layout;

const HomePage = ({undo, redo, nothingUndo, nothingRedo}) => (
    <Layout>
        <Header>
            <Row className='header'>
                <Col span={ 7 }><h1>Todo-list</h1></Col>
                <Col span={ 7 } offset ={ 10 } >
                    <Button.Group>
                        <Button onClick={ undo } disabled = { nothingUndo }>
                            <Icon type='left' /> Undo
                        </Button>
                        <Button onClick={ redo } disabled = { nothingRedo }>
                            Redo<Icon type='right' />
                        </Button>
                    </Button.Group>
                </Col>
            </Row>
        </Header>
        <Content>
            <Row>
                <Col span={ 9 }><CategoriesTree /></Col>
                <Col span={ 14 } offset={ 1 }><TodoColumn /></Col>
            </Row>
        </Content>
    </Layout>
);

HomePage.propTypes = {
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired,
    nothingRedo: PropTypes.bool.isRequired,
    nothingUndo: PropTypes.bool.isRequired
}

export default HomePage;