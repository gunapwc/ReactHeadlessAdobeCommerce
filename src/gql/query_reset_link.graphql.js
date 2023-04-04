import { gql } from '@apollo/client';

export default gql`mutation (
  $email: String!,
   ){
    requestPasswordResetEmail(
            email: $email
      )
  }
`;



  

