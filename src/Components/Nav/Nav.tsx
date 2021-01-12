import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/home">Home</Link>
      <Link to="/store">Plant Store</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Nav;
