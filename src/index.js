import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  concat,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const uri = "/api";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
  mutate: {
    errorPolicy: "all",
  },
};

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//     },
//   }));

//   return forward(operation);
// });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  // import { addToCart, login } from "../redux/counterSlice";
  // import { useDispatch } from "react-redux";
  // const Dispatch = useDispatch();
  // Dispatch(login(23456789));
  let token;
  const persistedToken = localStorage.getItem("user_token");
  if(persistedToken !== "null")
  {
    token = persistedToken;
  }
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }));

  return forward(operation);
})

const httpLink = new HttpLink({
  uri: uri,
  headers: {
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
