import { Row, Col, Card } from 'antd';
import { BillingForm } from './BillingForm';
import type { UserInfo } from 'App';

export type BillingProps = {
  setUserInfo: (userInfo: UserInfo) => void;
  setStep: (step: string) => void;
};

export const Billing = (props: BillingProps) => {
  return (
    <Row align="middle" justify="center">
      <Col xs={24} xl={12}>
        <Card title="Fill in billing info">
          <BillingForm {...props} />
        </Card>
      </Col>
    </Row>
  );
};
