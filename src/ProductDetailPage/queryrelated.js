import { gql } from "@apollo/client";

const queryRelated = (id) => {

    return gql`query {
        products(filter: 
          {
            sku: {eq: "${id}"}})  {
          items {
            id
            name
            sku
            related_products {
              id
              sku
              stock_status
              short_description {
                html
              }
              url_key
              name
              special_price
              price_range {
                minimum_price {
                  final_price {
                    value
                    currency
                  }
                }
                maximum_price {
                  final_price {
                    value
                    currency
                  }
                }
              }
            }
          }
        }
      }
  `;
}
export default queryRelated;