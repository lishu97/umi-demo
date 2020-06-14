import React from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
import './PersonCard.less'

export default function PersonCard(props) {
	const { loading, avatar, name, description } = props;
	return (
        <Card
            style={{ width: 300 }}
            className="personCard"
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
            ]}
        >
            <Skeleton loading={loading} avatar={true} active={true}>
                <Meta avatar={<Avatar src={avatar} />} title={name} description={description} />
            </Skeleton>
        </Card>
	);
}
