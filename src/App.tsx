import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Breadcrumb, Row, Col, Button } from 'antd';

import { ShoppingCart } from 'components/ShoppingCart';
import { GiftTo } from 'components/GiftTo';
import { Payment } from 'components/Payment';

// Use this import to load the cart content
import cart from 'assets/cart.json';

// Use this import to load the list of users who can receive a gift from you
import userlist from 'assets/gift_recipients.json';
import { Billing } from 'components/Billing';
import { PurchaseDone } from 'components/PurchaseDone';
import type { CartItem } from 'types/CartItem';
import type { GiftRecipient } from 'types/GiftRecipient';
import type { PaymentMethod } from 'types/PaymentMethod';
import type { OrderFormData } from 'types/OrderFormData';

export type AppProps = {};

export type UserInfo = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  billingAddress: {
    address: string;
    city: string;
    stateOrProvince: string;
    country: string;
    zipCode: string;
  };
};

export const App: FC<AppProps> = () => {
  const [step, setStep] = useState('cart');
  const [shoppingCart, setShoppingCart] = useState(cart);
  const [buyFor, setBuyFor] = useState('' as string | undefined);
  const [paymentMethod, setPaymentMethod] = useState({} as PaymentMethod);
  const [userInfo, setUserInfo] = useState({} as UserInfo);
  const [path, setPath] = useState([
    {
      title: <Button type="link">cart</Button>,
      onClick: () => {
        setStep('cart');
      },
      name: 'cart',
    },
  ]);

  useEffect(() => {
    setPath((path) => {
      const index = path.findIndex((item) => item.name === step);
      if (index >= 0) {
        return path.slice(0, index + 1);
      } else {
        const newItem = {
          title: <Button type="link">{step}</Button>,
          onClick: () => {
            setStep(step);
          },
          name: step,
        };
        return [...path, newItem];
      }
    });
  }, [step]);

  if (step === 'done') {
    const products = shoppingCart.map((item) => item.id);
    // FINAL DATA
    const data: OrderFormData = {
      ...userInfo,
      products,
      giftRecipient: buyFor,
      paymentMethod,
    };

    console.log(data);
  }

  return (
    <div>
      {step !== 'done' && (
        <Row>
          <Col offset={0} lg={{ offset: 6 }}>
            <Breadcrumb items={path} />
          </Col>
        </Row>
      )}
      {step === 'cart' && (
        <ShoppingCart
          cart={shoppingCart as [CartItem]}
          setCart={setShoppingCart}
          setStep={setStep}
        />
      )}
      {step === 'gift' && (
        <GiftTo
          users={userlist as [GiftRecipient]}
          setBuyFor={setBuyFor}
          setStep={setStep}
        />
      )}
      {step === 'payment' && (
        <Payment setPaymentMethod={setPaymentMethod} setStep={setStep} />
      )}
      {step === 'billing' && (
        <Billing setUserInfo={setUserInfo} setStep={setStep} />
      )}
      {step === 'done' && <PurchaseDone />}
    </div>
  );
};
