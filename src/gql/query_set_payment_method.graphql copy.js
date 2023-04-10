import { gql } from "@apollo/client";

export default gql`
mutation {
  setPaymentMethodOnCart(input: {
      cart_id: "AMZJ48beQRRZFMjIF9n8bJDCURTyaif5"
      payment_method: {
          code: "checkmo"
      }
  }) {
    cart {
      selected_payment_method {
        code
      }
    }
  }
}
`;
