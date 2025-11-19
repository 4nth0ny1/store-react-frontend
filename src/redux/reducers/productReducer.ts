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

const initialState: ProductState = {
  loading: false,
  error: null,
  data: [],
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

    default:
      return state;
  }
};

export default productReducer;
