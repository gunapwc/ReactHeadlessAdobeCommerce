import { gql } from '@apollo/client';

export default gql`
{
  customer {
      firstname middlename lastname email
      addresses {
          telephone
      }
  }
}
`;
