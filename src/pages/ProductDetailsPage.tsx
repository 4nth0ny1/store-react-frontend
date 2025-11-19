import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById } from "../redux/reducers/actions/productActions";

function ProductDetailsPage({ product, loading, error, fetchProductById }) {
  const { id } = useParams();

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div>
      <h2>Product Details</h2>

      <p>
        <strong>ID:</strong> {product.id}
      </p>
      <p>
        <strong>Name:</strong> {product.name}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.products.selected,
  loading: state.products.loading,
  error: state.products.error,
});

const mapDispatchToProps = {
  fetchProductById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
