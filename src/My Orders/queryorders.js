import { gql } from "@apollo/client";

const queryorders = (id) => {

    return gql`query {
                    customerOrders {
                        items {
                            order_number
                            id
                            created_at
                            grand_total
                            status
                            created_at
                        }
                    }
                }`;
}
export default queryorders;

