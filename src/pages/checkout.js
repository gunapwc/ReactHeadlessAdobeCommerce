import React from "react";
import "./checkout.scss";
import {
  Switch,
  Route,
  NavLink,
  Link,
  Redirect,
  useNavigate,
} from "react-router-dom";

import { useForm } from "react-hook-form";

import mutationPlaceOrder from "../gql/query_place_order.graphql";
import mutationSetbillingAddress from "../gql/query_set_billing_address.graphql";
import mutationCartProductdetails from "../gql/query_cart_product_details.graphql";
import { useQuery,useMutation } from '@apollo/client';


export const Checkout = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const { loading, error, data } = useQuery(mutationCartProductdetails);

  const [cartdetails, getCartProduct] = React.useState([]);

  React.useEffect(() => {
    console.log(data);

    if (data) {
      getCartProduct(data?.cart);
      console.log('cartdetails --> ' + data?.cart?.prices?.grand_total?.value);
      console.log('cartdetails --> ' + data?.cart?.items[0].product?.name);

      // AMOUNT
      console.log('cartdetails --> ' + data?.cart?.prices?.grand_total?.value);
      console.log('cartdetails --> ' + data?.cart?.prices?.grand_total?.currency);


      // ADDRESS
      console.log('cartdetails --> ' + data?.cart?.billing_address?.street);

      console.log('Price Value --> ' +data?.cart?.items[0].prices?.price.value);

    }
  }, [data]);
  
  const [submitPlaceOrder] = useMutation(mutationPlaceOrder, {
    fetchPolicy: "no-cache",
    onCompleted: (response) => {
      
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (datalogin) => {
    console.log('Click--->');
    submitPlaceOrder({ variables:  datalogin });
  };


  return (
    <div class="checkout-body row m-0">
      <div className="col-md-5">
        <div class="checkout-order-summary">
          <p class="order-summary-title">Order Summary</p>
          <p class="order-summary-para">
            Check your items. And select a suitable shipping method.
          </p>
         
         
          <div class="order-summary-product-wrap py-6">
            
          {/* {data.1map((value,i) => { */}
            {/* return ( */}
            <div class="order-summary-product">
              <img
                class="order-summary-product-img"
                src="http://localhost:3000/static/media/xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.9bceaf8eda985c6475f7.webp"
                alt=""
              />
              <div class="order-summary-product-content ml-6">
                <span class="order-summary-product-title">
                  {data?.cart?.items[0].product?.name}
                </span>
                <p class="order-summary-product-price"> {data?.cart?.items[0].prices?.price.value}</p>
              </div>
            </div>
             {/* );
            })} */}
            {/* <div class="order-summary-product">
              <img
                class="order-summary-product-img"
                src="http://localhost:3000/static/media/xretail6_02.jpg.pagespeed.ic.XP0T-m8rXz.9bceaf8eda985c6475f7.webp"
                alt=""
              />
              <div class="order-summary-product-content ml-6">
                <span class="order-summary-product-title">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <p class="order-summary-product-price">Rs 138.99</p>
              </div>
            </div> */}

          </div>

          <p class="shipping-method-heading">Shipping Methods</p>

          <form>
            <div class="shipping-method-size">
              <input
                type="radio"
                id="free"
                name="delivery-method"
                class="checkbox-input"
              />
              <label for="free">
                <div class="free-delivery-method ml-3">
                  <span class="mt-2 free-delivery-title">Free Delivery</span>
                  <p class="free-delivery-para">Delivery: 2-4 Days</p>
                </div>
              </label>
            </div>

            <div class="shipping-method-size">
              <input
                type="radio"
                id="paid"
                name="delivery-method"
                class="checkbox-input"
              />
              <label for="paid">
                <div class="free-delivery-method ml-3">
                  <span class="mt-2 free-delivery-title">Paid Delivery</span>
                  <p class="free-delivery-para">Delivery: 0-1 Day</p>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="col-md-7">
        <div class="payment-body">
          <p class="payment-body-title">Payment Details</p>
          <p class="payment-body-para">
            Complete your order by providing your payment details.
          </p>
          <div class="payment-body-wrap">
            <label for="email" class="form-block">
              Email
            </label>
            <div class="pay-padding">
              <input
                type="text"
                id="email"
                value={data?.cart?.email}
                name="email"
                class="form-control form-field"
                placeholder="your.email@gmail.com"
              />
            </div>
            <label for="card-holder" class="form-block">
              Card Holder
            </label>
            <div class="pay-padding">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                value={data?.cart?.billing_address?.firstname +' '+data?.cart?.billing_address?.lastname }
                class="form-control form-field"
                placeholder="Your full name here"
              />
            </div>
            <label for="card-no" class="form-block">
              Card Details
            </label>
            <div class="flex pay-padding">
              <input
                type="text"
                id="card-no"
                name="card-no"
                class="form-control form-field form-wrap-card"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />

              <input
                type="text"
                name="credit-expiry"
                class="form-control form-field form-wrap-exp"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                class="form-control form-field form-wrap-cvc"
                placeholder="CVC"
              />
            </div>
            <label for="billing-address" class="form-block">
              Billing Address
            </label>
            <div class="flex flex-col sm:flex-row pay-padding">
              <input
                type="text"
                id="billing-address"
                name="billing-address"
                value={data?.cart?.billing_address?.street}
                class="form-control form-field form-wrap-add"
                placeholder="Street Address"
              />

              <select
                type="text"
                name="billing-state"
                
                class="form-control form-field form-wrap-state"
              >
                <option value="State">{data?.cart?.billing_address?.region?.label}</option>
              </select>
              <input
                type="text"
                value={data?.cart?.billing_address?.country?.code}
                name="billing-zip"
                class="form-control form-field form-wrap-zip"
                placeholder="ZIP"
              />
            </div>

            <div class="payment-details-wrap">
              <div class="flex items-center justify-between">
                <p class="payment-details">Subtotal</p>
                <p class="payment-details-price">Rs 399.00</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="payment-details">Shipping</p>
                <p class="payment-details-price">Rs 8.00</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="payment-details-total">Total</p>
              <p class="payment-details-price-total">{data?.cart?.prices?.grand_total?.currency + ' ' + data?.cart?.prices?.grand_total?.value }</p>
            </div>
          </div>

          <form
            className="login-form-wrap"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <Link className="nav-link" to={"/order-summary"}> */}
              <button class="checkout-place-order">Place Order</button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};
