import React, { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'umi';
import { namespace } from '@/models/workPlatform';
import './index.less';

const mapStateToProps = (state) => {
	let { menuList } = state[namespace];
	return {
		menuList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMenuList: (payload) => {
			dispatch({
				type: `${namespace}/getMenuList`,
				payload
			});
		}
	};
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class WorkPlatForm extends Component {
	componentDidMount() {
		this.props.getMenuList({ id: 'userid' });
	}
	onMenuItemClick = (key) => {
        this.props.history.push(`/${key}`);
    };
	render() {
		return (
			<div className="workPlatform">
				<h2>菜单选择</h2>
				<ul>
					{this.props.menuList.map((item) => {
						return (
							<li key={item.name} onClick={() => this.onMenuItemClick(item.key)}>
								{item.name}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default WorkPlatForm;
