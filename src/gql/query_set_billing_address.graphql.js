import { gql } from "@apollo/client";

export default gql`
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "AMZJ48beQRRZFMjIF9n8bJDCURTyaif5"
      billing_address: {
        address: {
          firstname: "Sivakumar"
          lastname: "TN"
          company: "PwC"
          street: ["64 Strawberry Dr", "Beverly Hills"]
          city: "Los Angeles"
          region: "CA"
          region_id: 12
          postcode: "90210"
          country_code: "US"
          telephone: "123-456-0000"
          save_in_address_book: true
        }
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
        region{
          code
          label
        }
        postcode
        telephone
        country {
          code
          label
        }
      }
    }
  }
}

`;
