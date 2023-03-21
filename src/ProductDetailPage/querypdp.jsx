import { gql } from "@apollo/client";

const queryPdp = (id) => {

    return gql`query {
        products(filter: 
          {
            sku: {eq: "1 Month Membership"}})  {
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