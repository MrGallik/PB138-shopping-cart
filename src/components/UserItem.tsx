import { Row, Col, Card, Avatar } from 'antd';
import type { GiftRecipient } from 'types/GiftRecipient';

export type UserItemProps = {
  user: GiftRecipient;
  onSelect: (id: string) => void;
};

export const UserItem = (props: UserItemProps) => {
  const { user, onSelect } = props;

  const handleSelect = () => onSelect(user.id);

  return (
    <Card size="small" onClick={handleSelect}>
      <Row align="middle">
        <Col span={2}>
          <Avatar src={<img src={user.avatarUri} alt="avatar" />} />
        </Col>
        <Col span={8}>{user.name}</Col>
        <Col flex="auto">{user.username}</Col>
      </Row>
    </Card>
  );
};
