// redux/reducers/actions/productActions.ts

export const fetchProducts = () => {
  return async (dispatch: (action: any) => void) => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });

    try {
      const response = await fetch("http://localhost:8080/api/products");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const products = await response.json();

      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        products: products,
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Unknown error fetching products";

      dispatch({
        type: "FETCH_PRODUCTS_FAILURE",
        error: message,
      });
    }
  };
};

export const fetchProductById = (id) => {
  return async (dispatch: (action: any) => void) => {
    dispatch({ type: "FETCH_PRODUCT_BY_ID_REQUEST" });

    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const product = await response.json();

      dispatch({
        type: "FETCH_PRODUCT_BY_ID_SUCCESS",
        payload: product, // <-- FIX
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Unknown error fetching product";

      dispatch({
        type: "FETCH_PRODUCT_BY_ID_FAILURE",
        payload: message, // <-- FIX
      });
    }
  };
};
