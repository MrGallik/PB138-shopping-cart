import { useState } from 'react';
import { Row, Col, Card, Button, Divider } from 'antd';
import { ShoppingCartItem } from './ShoppingCartItem';
import type { CartItem } from 'types/CartItem';

export type ShoppingCartProps = {
  cart: [CartItem];
  setCart: (cart: [CartItem]) => void;
  setStep: (step: string) => void;
};

export const ShoppingCart = (props: ShoppingCartProps) => {
  const { cart, setCart, setStep } = props;

  const handleDeleteItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id) as [CartItem];
    setCart(updatedCart);
  };

  const [showAllItems, setShowAllItems] = useState(false);
  const cartToShow = showAllItems ? cart : cart.slice(0, 3);
  const handleShowAllItems = () => {
    setShowAllItems(!showAllItems);
  };

  const handleGift = () => setStep('gift');
  const handlePurchase = () => setStep('payment');

  return (
    <Row align="middle" justify="center">
      <Col xs={24} xl={12}>
        <Card title="Shopping Cart">
          {cartToShow.map((item) => (
            <ShoppingCartItem
              item={item}
              onDelete={handleDeleteItem}
              key={item.id}
            />
          ))}
          <Row justify="center">
            <Button type="text" onClick={handleShowAllItems}>
              ...
            </Button>
          </Row>
          <Divider />
          <Row justify="end">
            <Col span={3}>
              <s>
                $
                {cart
                  .reduce((accumulator, item) => {
                    return accumulator + item.price;
                  }, 0)
                  .toFixed(2)}
              </s>
            </Col>
            <Col span={3}>
              <strong>
                $
                {cart
                  .reduce((accumulator, item) => {
                    return accumulator + (item.salePrice ?? item.price);
                  }, 0)
                  .toFixed(2)}
              </strong>
            </Col>
          </Row>
          <Divider />
          <Row justify="space-between">
            <Col span={8}>
              <Button>Back to store</Button>
            </Col>
            <Col span={16}>
              <Row justify="end">
                <Col>
                  <Button onClick={handlePurchase} type="primary">
                    Purchase
                  </Button>
                </Col>
                <Col offset={1}>
                  <Button onClick={handleGift} type="primary">
                    Gift to{' '}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
