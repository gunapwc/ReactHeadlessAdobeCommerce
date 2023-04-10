import { gql } from "@apollo/client";

const queryPdp = (id) => {

    return gql`query {
        products(filter: 
          {
            sku: {eq: "${id}"}})  {
          items {
              name
                  description {
              html
            }
            short_description {
              html
            }
          }
        }
      }
  `;
}
export default queryPdp;