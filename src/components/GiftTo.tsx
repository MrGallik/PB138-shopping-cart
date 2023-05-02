import { Row, Col, Card, Button, AutoComplete, Input } from 'antd';
import { useState } from 'react';

import { UserItem } from './UserItem';
import type { GiftRecipient } from 'types/GiftRecipient';

export type GiftToProps = {
  users: [GiftRecipient];
  setBuyFor: (id: string) => void;
  setStep: (step: string) => void;
};

export const GiftTo = (props: GiftToProps) => {
  const { users, setBuyFor, setStep } = props;

  const [usersFiltered, setUsersFiltered] = useState(users);

  const [numOfItems, setNumOfItems] = useState(5);
  const usersToShow = usersFiltered.slice(0, numOfItems);
  const handleIncreaseNumOfItems = () => {
    setNumOfItems(numOfItems + 5);
  };

  const handleSelect = (id: string) => {
    setBuyFor(id);
    setStep('payment');
  };

  const handleSearch = (value: string) => {
    const foundUsers = users.filter(
      (user) => user.name.includes(value) || user.username.includes(value)
    );
    setUsersFiltered(foundUsers as [GiftRecipient]);
  };

  return (
    <Row align="middle" justify="center">
      <Col xs={24} xl={12}>
        <Card title="Select recipient">
          <AutoComplete onSearch={handleSearch}>
            <Input.Search size="large" placeholder="username" enterButton />
          </AutoComplete>
          {usersToShow.map((user) => (
            <UserItem user={user} onSelect={handleSelect} key={user.id} />
          ))}
          <Row justify="center">
            <Button type="text" onClick={handleIncreaseNumOfItems}>
              more
            </Button>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
