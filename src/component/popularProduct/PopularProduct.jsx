import React from "react";
import { ReactSVG } from "react-svg";
import { PopularImg1, ProductCategories2 } from "../../utils/images";
import SimpleSlider from "../slider/SliderComponent";
import "./popularProduct.scss";
import ProductList from "../../gql/query_product_list.graphql";
import { useQuery } from "@apollo/client";

function PopularProduct(props) {

  // const { category , category_id } = props;

  // const {
  //   data: product,
  // } = useQuery(ProductList, {
  //   fetchPolicy: 'cache-and-network',
  //   nextFetchPolicy: 'cache-first',
  //   variables: {
  //     category_id
  //   }
  // });

  // const [productlist, setProductlist] = React.useState([]);

  // React.useEffect(() => {
  //   console.log(product);

  //   if (product?.products?.items) {
  //     setProductlist(product?.products?.items);
  //   }
  // }, [product]);

  // return (
  //   <>
  //     <div className="popularProduct">
  //       <div className="popularProduct_banner">
  //         <img src={category.image} alt="" />
  //         <div className="popularProduct_banner_text">
  //           <ReactSVG src="" />
  //           <h6>{category?.name}</h6>
  //           <div dangerouslySetInnerHTML={{__html:category?.description}}>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="popularProduct_list">
  //         <SimpleSlider rows={2}>
  //           {productlist?.map((value,i) => {
  //             return (
  //               <div key={i} className="popularProduct_list_card">
  //                 <div className="popularProduct_list_card_img">
  //                   <img src={value?.thumbnail?.url} alt="" />
  //                 </div>
  //                 <p>{value?.name}</p>
  //                 <div className="popularProduct_list_card_button">
  //                   <button>Click here to Buy</button>
  //                 </div>
  //               </div>
  //                 );
  //               })}
  //         </SimpleSlider>
  //       </div>
  //     </div>

   
  //   </>
  // );
}

export default PopularProduct;
