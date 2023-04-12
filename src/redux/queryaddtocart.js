import { gql } from "@apollo/client";

const queryAtC = (id) => {

    return gql`mutation addSimpleProductsToCart(
        $quantity: string,
        $sku: string,
    ){
        addSimpleProductsToCart(
            input: {
                cart_id: "${id}"
                cart_items: [
                    {
                        data: {
                            quantity: 1
                            sku: "Aster Protein Shaker Bottle Yellow with Plastic Mixer 600 mL"
                        }
                    }
                ]
            }
            ) {
                cart {
                    items {
                        id
                        product {
                            sku
                            stock_status
                        }
                        quantity
                    }
                }
            }
        }
        `;
}
export default queryAtC;