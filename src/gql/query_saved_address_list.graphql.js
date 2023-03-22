import { gql } from '@apollo/client';

export default gql`
{
  customer {
      addresses {
          city company country_code default_billing default_shipping fax firstname id lastname middlename postcode prefix street telephone
      }
  }
}
`;
