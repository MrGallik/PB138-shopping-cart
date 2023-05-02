import type { PaymentMethod } from './PaymentMethod';

export type OrderFormData = {
  /**
   * The name of the person placing the order.
   */
  name: string;
  /**
   * The surname of the person placing the order.
   */
  surname: string;

  /**
   * The email address of the person placing the order.
   */
  email: string;

  /**
   * The phone number of the person placing the order.
   */
  phoneNumber: string;

  /**
   * An array of product IDs. If there are multiple items in the cart, duplicate those IDs. Our backend team is still working on a better way to handle this.
   */
  products: string[];

  /**
   * The ID of the gift recipient. If the order is not a gift, this field should be undefined.
   */
  giftRecipient?: string | undefined;

  /**
   * The payment method to use for the order.
   */
  paymentMethod: PaymentMethod;

  /**
   * The billing address for the order.
   */
  billingAddress: {
    address: string;
    city: string;
    stateOrProvince: string;
    country: string;
    zipCode: string;
  };
};
