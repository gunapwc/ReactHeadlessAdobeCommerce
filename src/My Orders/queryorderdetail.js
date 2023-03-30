import { gql } from "@apollo/client";

const queryPdp = (id) => {

  return gql`query { 
      customer{ 
      orders{ 
      total_count 
      page_info{current_page page_size total_pages} 
      items{
      id 
      number 
      order_date status 
      total{ 
      base_grand_total{currency value} 
      grand_total{currency value} 
      subtotal{currency value} 
      } 
      items{ 
      id 
      product_sku 
      product_name 
      product_url_key 
      quantity_ordered status 
      product_sale_price{currency value} 
      } 
      } 
      } 
      } 
     }
  `;
}
export default queryPdp;