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
