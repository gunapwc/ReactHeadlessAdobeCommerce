import { gql } from '@apollo/client';

export default gql`
query {
  categories(pageSize: 20 currentPage: 1) {
      items {
          name
          path
          description
          position
          product_count
          meta_title
          meta_keywords
          level
          children {
              name
              path
              position
              product_count
              description
              meta_title
              meta_keywords
              product_count
          }
      }
  }
}
`;
