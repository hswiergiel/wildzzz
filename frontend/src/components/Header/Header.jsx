import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "./style";
import logo from "../../assets/logo.png";
import { Context } from "../../services/Context";

export default function Header() {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const hlogout = () => {
    setUser({
      id: null,
      lastname: null,
      firstname: null,
      email: null,
      password: null,
    });
    navigate("/");
  };
  return (
    <Style>
      <Link className="imgLink" to="/b">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        {user.email !== null ? (
          <button type="button" onClick={hlogout}>
            {" "}
            Log out
          </button>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </ul>
    </Style>
  );
}
