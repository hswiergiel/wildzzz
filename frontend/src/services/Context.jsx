import propTypes from "prop-types";
import { createContext, useMemo, useState } from "react";
import couch1 from "../assets/couch1.jpg";
import couch2 from "../assets/couch2.jpg";
import couch3 from "../assets/couch3.jpg";

const Context = createContext();

function Provider({ children }) {
  const [user, setUser] = useState({
    id: null,
    lastname: null,
    firstname: null,
    email: null,
    password: null,
    points: null,
  });
  const [users, setUsers] = useState([]);
  const [couches, setCouches] = useState([]);
  const [selectedCouch, setSelectedCouch] = useState([0, 1, 2]);
  const [selectedSlot, setSelectedSlot] = useState([0, 1, 2]);
  const [couchPicture, setCouchPicture] = useState([couch1, couch2, couch3]);
  const context = useMemo(
    () => ({
      user,
      setUser,
      users,
      setUsers,
      couches,
      setCouches,
      selectedCouch,
      setSelectedCouch,
      selectedSlot,
      setSelectedSlot,
      couchPicture,
      setCouchPicture,
    }),
    [
      user,
      setUser,
      users,
      setUsers,
      couches,
      setCouches,
      selectedCouch,
      setSelectedCouch,
      selectedSlot,
      setSelectedSlot,
      couchPicture,
      setCouchPicture,
    ]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;

export { Context };

const UserShape = {
  id: propTypes.number,
  lastname: propTypes.string,
  firstname: propTypes.string,
  email: propTypes.string,
  password: propTypes.string,
  points: propTypes.number,
};

const CouchShape = {
  id: propTypes.number,
  name: propTypes.string,
  type: propTypes.string,
  picture: propTypes.string,
  cost: propTypes.number,
  description: propTypes.string,
};

Provider.propTypes = {
  children: propTypes.shape({
    userInfo: propTypes.shape(UserShape),
    setUserInfo: propTypes.shape(UserShape),
    users: propTypes.arrayOf(propTypes.shape(UserShape)),
    setUsers: propTypes.arrayOf(propTypes.shape(UserShape)),
    couches: propTypes.arrayOf(propTypes.shape(CouchShape)),
    setCouches: propTypes.arrayOf(propTypes.shape(CouchShape)),
    selectedCouch: propTypes.arrayOf(propTypes.number),
    setSelectedCouch: propTypes.arrayOf(propTypes.number),
    selectedSlot: propTypes.arrayOf(propTypes.number),
    setSelectedSlot: propTypes.arrayOf(propTypes.number),
    couchPicture: propTypes.string,
    setCouchPicture: propTypes.string,
  }).isRequired,
};
