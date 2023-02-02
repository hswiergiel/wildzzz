import Calendar from "@components/Calendar/Calendar";
import useApi from "@services/useApi";
import { useContext, useEffect } from "react";
import { Context } from "../../services/Context";
import couch1 from "../../assets/couch1.jpg";
import couch2 from "../../assets/couch2.jpg";
import couch3 from "../../assets/couch3.jpg";
import useScreenSize from "../../services/useScreenSize";
import Style from "./style";

export default function Booking() {
  const {
    user,
    couches,
    setCouches,
    setSelectedCouch,
    setSelectedSlot,
    setCouchPicture,
  } = useContext(Context);
  const screenWidth = useScreenSize().width;
  useEffect(() => {
    if (screenWidth <= 1200) {
      setSelectedCouch([0]);
    }
  }, [screenWidth]);

  const slotshours = ["12h30 - 13h", "13h - 13h30", "13h30 - 14h"];
  const api = useApi();
  const handleSelectCouch = (event) => {
    if (event.target.value.length > 1) {
      setSelectedCouch([
        parseInt(event.target.value[0], 10),
        parseInt(event.target.value[2], 10),
        parseInt(event.target.value[4], 10),
      ]);
    } else {
      setSelectedCouch([parseInt(event.target.value, 10)]);
    }
    switch (event.target.value) {
      case "0":
        setCouchPicture([couch1]);
        break;
      case "1":
        setCouchPicture([couch2]);
        break;
      case "2":
        setCouchPicture([couch3]);
        break;
      default:
        setCouchPicture([couch1, couch2, couch3]);
    }
  };

  const handleSelectSlot = (event) => {
    if (event.target.value.length > 1) {
      setSelectedSlot([
        parseInt(event.target.value[0], 10),
        parseInt(event.target.value[2], 10),
        parseInt(event.target.value[4], 10),
      ]);
    } else {
      setSelectedSlot([parseInt(event.target.value, 10)]);
    }
  };
  useEffect(() => {
    api
      .get("/couches")
      .then(({ data }) => setCouches(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Style>
      <div className="top">
        {user.email ? (
          <h2>
            {" "}
            Bienvenue {user.firstname}, vous disposez de <em>{user.points}</em>{" "}
            points dodo
          </h2>
        ) : (
          ""
        )}
        {couches && (
          <>
            <select name="type" id="typeselect" onChange={handleSelectCouch}>
              <option className="hidden" value={[0, 1, 2]}>
                Tous les canapés
              </option>
              {couches.map((couch, index) => (
                <option value={index}>{couch.name}</option>
              ))}
            </select>
            <select name="type" id="typeselect" onChange={handleSelectSlot}>
              <option value={[0, 1, 2]}>Tous les créneaux</option>
              {slotshours.map((slot, index) => (
                <option value={index}>{slot}</option>
              ))}
            </select>
          </>
        )}
      </div>
      <Calendar />
    </Style>
  );
}
