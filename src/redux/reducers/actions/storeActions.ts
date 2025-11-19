import type { Store } from "../storeReducer";

export const fetchStores = () => {
  return async (dispatch: (action: any) => void) => {
    dispatch({ type: "FETCH_STORES_REQUEST" });

    try {
      const response = await fetch("http://localhost:8080/api/stores");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const stores: Store[] = await response.json();

      dispatch({
        type: "FETCH_STORES_SUCCESS",
        payload: stores,
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Unknown error fetching stores";

      dispatch({
        type: "FETCH_STORES_FAILURE",
        payload: message,
      });
    }
  };
};
