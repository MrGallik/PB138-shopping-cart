import { Controller } from 'react-hook-form';
import type { Control, FieldErrors, FieldValues } from 'react-hook-form';
import { Form, Input } from 'antd';

type InputFieldProps = {
  name: string;
  placeholder: string;
  control: Control<FieldValues, unknown>;
  errors: FieldErrors<FieldValues>;
};

export const InputField = (props: InputFieldProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <Form.Item help={props.errors[props.name]?.message?.toString()}>
          <Input
            size="large"
            {...field}
            placeholder={props.placeholder}
            status={props.errors[props.name]?.message ? 'error' : ''}
          />
        </Form.Item>
      )}
    />
  );
};
