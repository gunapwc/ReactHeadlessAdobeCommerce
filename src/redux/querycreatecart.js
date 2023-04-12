import { gql } from "@apollo/client";

const queryCC = (id) => {

    return gql`query {
            customerCart{
              id
            }
      }
  `;
}
export default queryCC;