import { gql } from '@apollo/client';

export default gql`
{
  products(search: "de") {
      items {
          sku
      }
  }
}
`;
