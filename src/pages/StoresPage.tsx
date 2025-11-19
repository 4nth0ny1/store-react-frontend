import { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchStores } from "../redux/reducers/actions/storeActions.ts";

type Store = {
  id: number;
  storeNumber: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  manager: string;
};

type Props = {
  loading: boolean;
  error: string | null;
  stores: Store[];
  fetchStores: () => void;
};

function StoresPage({ loading, error, stores, fetchStores }: Props) {
  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  if (loading) return <div>Loading data ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h2>Stores Page</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Store Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.id}>
              <td>{store.id}</td>
              <td>
                <Link to={`/stores/${store.id}`}>{store.storeNumber}</Link>
              </td>
              <td>{store.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.stores.loading,
  error: state.stores.error,
  stores: state.stores.data,
});

const mapDispatchToProps = {
  fetchStores,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresPage);
