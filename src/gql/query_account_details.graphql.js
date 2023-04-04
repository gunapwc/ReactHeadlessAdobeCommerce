import { gql } from "@apollo/client";

export default gql`
  {
    customer {
      firstname
      middlename
      lastname
      suffix
      email
      addresses {
        telephone
      }
    }
  }
`;
