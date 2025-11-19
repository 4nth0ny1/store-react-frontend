export type Store = {
  id: number;
  storeNumber: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  manager: string;
};

export type StoreState = {
  loading: boolean;
  error: string | null;
  data: Store[];
  selected: Store | null;
};

export type StoreAction =
  | { type: "FETCH_STORES_REQUEST" }
  | { type: "FETCH_STORES_SUCCESS"; payload: Store[] }
  | { type: "FETCH_STORES_FAILURE"; payload: string };

const initialState: StoreState = {
  loading: false,
  error: null,
  data: [],
  selected: null,
};

const storeReducer = (
  state: StoreState = initialState,
  action: StoreAction
): StoreState => {
  switch (action.type) {
    case "FETCH_STORES_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_STORES_SUCCESS":
      return { ...state, loading: false, data: action.payload };

    case "FETCH_STORES_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default storeReducer;
