import { Result, Button } from 'antd';

export const PurchaseDone = () => {
  return (
    <Result
      status="success"
      title="Thank you for your purchase"
      extra={<Button>Back to store</Button>}
    />
  );
};
