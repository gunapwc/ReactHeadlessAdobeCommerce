import { gql } from '@apollo/client';

export default gql`
mutation {
  setPaymentMethodAndPlaceOrder(input: {
      cart_id: "1SMwDSgadDJgfQiN3ecoZyexoq5plnfK"
      payment_method: {
          code: "checkmo"
      }
  }) {
      order {
          order_id
      }
  }
}
`;
