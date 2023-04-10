import { gql } from "@apollo/client";

export default gql`
mutation {
  setShippingMethodsOnCart(input: {
    cart_id: "1M0DjLJxxrh42PAIbFWamBHwwYPKkGGt"
    shipping_methods: [
      {
        carrier_code: "flatrate"
        method_code: "flatrate"
      }
    ]
  }) {
    cart {
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          method_code
          carrier_title
          method_title
        }
      }
    }
  }
}
`;
