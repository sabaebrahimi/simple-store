import productData from "../data.json";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { list: productData.data };
    case "RETURN_PRODUCTS":
      return state;
    default:
      return state;
  }
};

export default productsReducer;
