import { NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <h1>Forum</h1>

      <NavLink to="/">Topics</NavLink>
      <NavLink to="/add-post">Add New Topic </NavLink>
    </header>
  );
};

export default HeaderView;
