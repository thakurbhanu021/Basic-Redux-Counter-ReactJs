import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAutheticated);

  const dispatch = useDispatch();

  const logoutHandler = ()=> {
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {auth && (
            <li>
              <a href="/">My User Profile</a>
            </li>
          )}
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {auth ? <button onClick={logoutHandler}>Logout</button> : <button>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
