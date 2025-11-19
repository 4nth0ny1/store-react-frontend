// redux/reducers/productReducer.ts

type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductState = {
  loading: boolean;
  error: string | null;
  data: Product[];
};

type ProductAction =
  | { type: "FETCH_PRODUCTS_REQUEST" }
  | { type: "FETCH_PRODUCTS_SUCCESS"; products: Product[] }
  | { type: "FETCH_PRODUCTS_FAILURE"; error: string };

const initialState = {
  loading: false,
  error: null,
  data: [], // list of products
  selected: null, // <-- add this for product details
};

const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.products,
      };

    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "FETCH_PRODUCT_BY_ID_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_PRODUCT_BY_ID_SUCCESS":
      return { ...state, loading: false, selected: action.payload };

    case "FETCH_PRODUCT_BY_ID_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;
