import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/store">Shop Now</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Nav;
