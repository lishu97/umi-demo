import React, { Component } from 'react';
import { connect } from 'dva';
import PersonCard from '../../components/PersonCard';
import { namespace } from '@/models/list';

import './index.less'

const mapStateToProps = (state) => {
    let {
        peopleList,
    } = state[namespace];
    return {
        peopleList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPeopleList: (payload) => {
            dispatch({
                type: `${namespace}/getPeopleList`,
                payload,
            });
        },
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
    componentDidMount() {
        this.props.getPeopleList({ pNo: 1, pSize: 10 })

    }
    render() {
        return <div className="peopleList">
            {
                this.props.peopleList.map(item => {
                    return <PersonCard key={item.name} name={item.name} description={item.description}/>
                })
            }
        </div>
    }
}

export default List;