import { Row, Col, Card, Avatar, Badge, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import type { CartItem } from 'types/CartItem';

export type ShoppingCartItemProps = {
  item: CartItem;
  onDelete: (id: string) => void;
};

export const ShoppingCartItem = (props: ShoppingCartItemProps) => {
  const { item, onDelete } = props;
  const deleteItem = () => {
    onDelete(item.id);
  };

  return (
    <Card size="small">
      <Row align="middle">
        <Col span={2}>
          <Badge count={item.quantity}>
            <Avatar src={<img src={item.thumbnailUri} alt="avatar" />} />
          </Badge>
        </Col>
        <Col flex="auto">{item.name}</Col>
        <Col span={3}>
          {item.salePrice ? (
            <s>${item.price}</s>
          ) : (
            <strong>${item.price}</strong>
          )}
        </Col>
        {item.salePrice ? (
          <Col span={3}>
            <strong>${item.salePrice}</strong>
          </Col>
        ) : (
          <></>
        )}
        <Col span={2}>
          <Button
            onClick={deleteItem}
            danger
            type="primary"
            shape="circle"
            icon={<CloseOutlined />}
          />
        </Col>
      </Row>
    </Card>
  );
};
