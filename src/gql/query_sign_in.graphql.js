import { gql } from '@apollo/client';

export default gql`
query {
  CustomGraphql(email: "subhajit@test.com"
      password: "Subha@magento") {
      status email name
  }
}
`;
