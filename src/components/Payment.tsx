import { Row, Col, Card, Collapse, Button } from 'antd';

import { PaymentForm } from './PaymentForm';
import type { PaymentMethod } from 'types/PaymentMethod';

export type PaymentProps = {
  setPaymentMethod: (method: PaymentMethod) => void;
  setStep: (step: string) => void;
};

const { Panel } = Collapse;

export const Payment = (props: PaymentProps) => {
  const handleGooglePay = () => {
    props.setPaymentMethod({ type: 'Google Pay' });
    props.setStep('billing');
  };
  const handleCash = () => {
    props.setPaymentMethod({ type: 'Cash' });
    props.setStep('billing');
  };

  return (
    <Row align="middle" justify="center">
      <Col xs={24} xl={12}>
        <Card title="Select payment method">
          <Collapse>
            <Panel header="Mastercard/Visa" key={1}>
              <PaymentForm {...props} />
            </Panel>
            <Panel header="Google Pay" key={2}>
              <Button onClick={handleGooglePay}>PAY</Button>
            </Panel>
            <Panel header="Cash" key={3}>
              <Button onClick={handleCash}>PAY</Button>
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};
