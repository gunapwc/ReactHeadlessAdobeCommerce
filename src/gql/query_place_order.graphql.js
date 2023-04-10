import { gql } from "@apollo/client";

export default gql`
  mutation {
    placeOrder(input: { cart_id: "1M0DjLJxxrh42PAIbFWamBHwwYPKkGGt" }) {
      order {
        order_number
      }
    }
  }
`;
