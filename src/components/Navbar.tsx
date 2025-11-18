import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Link className="" to="/">
        Logo
      </Link>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
