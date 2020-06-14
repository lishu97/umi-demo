import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { namespace } from '@/models/workPlatform';

const mapStateToProps = (state) => {
    let {
        menuList,
    } = state[namespace];
    return {
        menuList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMenuList: (payload) => {
            dispatch({
                type: `${namespace}/getMenuList`,
                payload,
            });
        },
        addMenuItem: (payload) => {
            dispatch({
                type: `${namespace}/changeMenuList`,
                payload,
            });
        },
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class StudentList extends Component {
    componentDidMount() {
        this.props.getMenuList({ id: '123' })

    }
    onBntClick = () => {
        this.props.addMenuItem({ name: 'newItem' })
    }
    render() {
        return <ul>
            <Button onClick={this.onBntClick}>123</Button>
            {
                this.props.menuList.map(item => {
                    return <li key={item.name}>{item.name}</li>
                })
            }
        </ul>
    }
}

export default StudentList;