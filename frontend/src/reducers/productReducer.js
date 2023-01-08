export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "ALL_PRODUCT_REQUEST":
      return {
        loading: true,
        products: [],
      };

    case "ALL_PRODUCT_SUCCESS":
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };
   
    case "ALL_PRODUCT_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
   
    default:
      return state;
  }
};
export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT_REQUEST":
    case "UPDATE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        isDeleted: true,
        product: action.payload,
      };

    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        isUpdated: true,
        product: action.payload,
      };
    case "DELETE_PRODUCT_FAIL":
       case "UPDATE_PRODUCT_FAIL":
       return {
        ...state,
        loading: false,
        error: action.payload,
      };
   
    default:
      return state;
  }
};
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_DETAIL_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "PRODUCT_DETAIL_SUCCESS":
      return {
        loading: false,
        product: action.payload,
      };
    case "PRODUCT_DETAIL_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
   
    default:
      return state;
  }
};

export const newProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "NEW_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "NEW_PRODUCT_SUCCESS":
      return {
        loading: false,
        success: true,
        product: action.payload.product,
      };
    case "NEW_PRODUCT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "NEW_PRODUCT_RESET":
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

