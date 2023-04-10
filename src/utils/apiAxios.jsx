import React from "react";
import axios from "axios";

const uri = "https://pwcdemo.eastus.cloudapp.azure.com/magentodefault/graphql";
// const uri = 'https://countries.trevorblades.com/graphql';
//  const uri = '/api';

const options = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const useGetAxios = async (query, variable) => {
  React.useEffect(() => {
    axios
      .get(uri, query)
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return [];
      });
  }, [query]);

  return [];
};

export const usePostAxios = async (query, variable) => {
  React.useEffect(() => {
    axios
      .post(uri, { query, variable })
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return [];
      });
  }, [query, variable]);
  return [];
};
