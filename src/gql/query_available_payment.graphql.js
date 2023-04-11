import { gql } from "@apollo/client";

export default gql`
query {
  cart(cart_id: "AMZJ48beQRRZFMjIF9n8bJDCURTyaif5") {
    available_payment_methods {
      code
      title
    }
  }
}
`;
