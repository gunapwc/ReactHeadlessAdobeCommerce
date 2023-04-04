import { gql } from '@apollo/client';

export default gql`mutation (
  $email: String!,
  $password: String!
   ){
    generateCustomerToken(
            email: $email
            password: $password
      ){
        token
      }
  }
`;



  

