import { gql } from '@apollo/client';

export default gql`
mutation {
  createCustomer(
      input: {
          firstname: "Demo"
          lastname: "Test"
          email: "demotest@gmail.com"
          password: "Test@123"
          is_subscribed: true
      }
  ) {
      customer {
          firstname lastname email is_subscribed
      }
  }
}
`;
