import React, {Component} from 'react';
import { connect } from 'dva';
const namespace = 'user';

const mapStateToProps = (state)=>{
    let listData = state[namespace].data;
    return {listData}
};

const mapDispatchToProps = (dispatch) => {
    // 定义方法，dispatch是内置函数
    return { //返回的这个对象将绑定到this.props对象中
        addUser : () =>{
            // 定义方法
            dispatch({ // 通过调用dispatch()方法，调用model中reducers的方法
                type: `${namespace}/save` // 指定方法，格式： namespace/方法名
            });
        },
        userList : () => { //新增初始化方法的定义
            dispatch({
				type: `${namespace}/initData`,
				payload: '1',
            });
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {

    componentDidMount() {
        this.props.userList();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.listData.map(
                            (v, i) => {return <li key={i}>{v}</li>}
                        )
                    }
                </ul>
                <button onClick={() => {this.props.addUser()}}>
                    添加
                </button>
            </div>
        );
    }
}

export default List;