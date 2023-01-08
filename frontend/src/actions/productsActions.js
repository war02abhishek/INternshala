import axios from "axios"


export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_PRODUCT_REQUEST",
    });
    const { data } = await axios.get(`api/v1/products`);

    dispatch({
      type: "ALL_PRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_PRODUCT_FAILURE",
        payload: error.response.data.message,
    });
  }
};

// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_PRODUCT_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/product/new`,
      productData,
      config
    );

    dispatch({
      type: "NEW_PRODUCT_SUCCESS",
         payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NEW_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};


export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/product/${id}`,
      productData,
      config
    );
    dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "UPDATE_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};



export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });

    const { data } = await axios.delete(`/api/v1/product/${id}`);

    dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_PRODUCT_FAIL",
           payload: error.response.data.message,
    });
  }
};
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCT_DETAIL_REQUEST",
    });
    const { data } = await axios.get(`/api/v1/product/${id}`);
    // console.log(data);
    dispatch({
      type: "PRODUCT_DETAIL_SUCCESS",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAIL_FAILURE",
      payload: error.response.data.message,
    });
  }
};