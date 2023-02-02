import useApi from "@services/useApi";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../services/Context";
import Style from "./style";

export default function Login() {
  const { setUser } = useContext(Context);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const api = useApi();

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();
  const hLogin = (evt) => {
    evt.preventDefault();
    api
      .post("/login", form)
      .then(({ data }) => {
        setUser(data[0]);
        navigate("/booking");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Style onSubmit={hLogin} encType="multipart/form-data">
      <legend>Connexion</legend>
      <input
        type="text"
        name="email"
        value={form.email}
        placeholder="Votre email"
        autoComplete="email"
        onChange={hChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Votre password"
        autoComplete="new-password"
        onChange={hChange}
      />
      <br />
      <input type="submit" value="Go!" />
    </Style>
  );
}
