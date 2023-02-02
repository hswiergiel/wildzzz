import { useEffect, useState, useContext } from "react";
import { MdBackHand } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { TbBedOff } from "react-icons/tb";
import useApi from "@services/useApi";
import { Context } from "../../services/Context";
import Style from "./style";

export default function Calendar() {
  const {
    setUser,
    user,
    users,
    setUsers,
    selectedCouch,
    selectedSlot,
    couches,
    couchPicture,
  } = useContext(Context);
  const [reservationNumber, setReservationNumber] = useState(0);
  function addDaysToDate(date, days) {
    const res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }
  const calendarDates = [];
  let today = new Date("2023-03-05T23:00:00.000Z");
  let addedDay = today;
  for (let i = 0; i < 6; i += 1) {
    calendarDates.push([addedDay.getMonth()]);
    let j = 0;
    while (addedDay.getMonth() === calendarDates[i][0]) {
      if (addedDay.getDay() > 0 && addedDay.getDay() < 6) {
        calendarDates[i].push(addedDay);
      }
      j += 1;
      addedDay = addDaysToDate(today, i + j);
    }
    today = addedDay;
    calendarDates[i].shift();
  }
  const options = { month: "long" };
  const dayoptions = { weekday: "long", day: "numeric" };
  function UpperCase(a) {
    return `${a}`.charAt(0).toUpperCase() + a.substr(1);
  }

  const api = useApi();
  const [reservations, setReservations] = useState();
  const hreservation = (dateresa, typeresa, slotresa) => {
    const updatedate = addDaysToDate(dateresa, 1);
    let reduction = 0;
    switch (typeresa) {
      case 2:
        reduction = 150;
        break;
      case 3:
        reduction = 250;
        break;
      default:
        reduction = 75;
    }
    setUser({ ...user, points: user.points - reduction });
    api
      .post("/reservations", {
        user_id: user.id,
        couch_id: typeresa,
        date: updatedate,
        slot: slotresa,
      })
      .then(() => {
        setReservationNumber(reservationNumber + 1);
        api
          .put(`/users/${user.id}`, { ...user })
          .then(() => {})
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const hpush = (dateresa, typeresa, slotresa, pushedUserId) => {
    const pusheduser = users.filter((user1) => user1.id === pushedUserId);
    const updatedate = addDaysToDate(dateresa, 1);
    let reduction = 0;
    switch (typeresa) {
      case 2:
        reduction = 150;
        break;
      case 3:
        reduction = 250;
        break;
      default:
        reduction = 75;
    }
    setUser({ ...user, points: user.points - reduction });
    api
      .put("/reservations", {
        user_id: user.id,
        couch_id: typeresa,
        date: updatedate,
        slot: slotresa,
        pushed_id: pushedUserId,
      })
      .then(() => {
        setReservationNumber(reservationNumber + 1);
        api
          .put(`/users/${user.id}`, { ...user })
          .then(() => {})
          .catch((err) => console.error(err));
        api
          .put(`/users/${pushedUserId}`, {
            ...pusheduser[0],
            points: pusheduser[0].points + reduction,
          })
          .then(() => {})
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const hunreservation = (typeresa, resaid) => {
    let reduction = 0;
    switch (typeresa) {
      case 2:
        reduction = 150;
        break;
      case 3:
        reduction = 250;
        break;
      default:
        reduction = 75;
    }
    setUser({ ...user, points: user.points + reduction });
    api
      .delete(`/reservations/${resaid}`)
      .then(() => {
        setReservationNumber(reservationNumber - 1);
      })
      .catch((err) => console.error(err));
    api
      .put(`/users/${user.id}`, { ...user })
      .then(() => {})
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    api
      .get("/users")
      .then(({ data: usersdata }) => {
        setUsers(usersdata);
      })
      .catch((err) => console.error(err));
    api
      .get("/reservations")
      .then(({ data: resadata }) => {
        setReservations(resadata);
      })
      .catch((err) => console.error(err));
  }, [reservationNumber]);

  const slotshours = ["12h30 - 13h", "13h - 13h30", "13h30 - 14h"];

  return (
    <Style>
      {calendarDates.map((month, key) => (
        <table key={`${month} - ${key + 1}`}>
          <thead>
            <tr>
              <th className="month" colSpan="10">
                {UpperCase(
                  new Intl.DateTimeFormat("fr-FR", options).format(month[0])
                )}
              </th>
            </tr>
            <tr>
              <th>""</th>
              {couches.length &&
                selectedCouch &&
                selectedCouch.map((scouch, index) => (
                  <th
                    colSpan={selectedSlot.length > 1 ? "3" : "1"}
                    key={`${scouch}name`}
                  >
                    {selectedCouch.length ? (
                      <>
                        <img src={couchPicture[index]} alt="couchpicture" />
                        <p className={`couch${scouch}`}>
                          {couches[scouch].name}
                        </p>
                        <p className="point">
                          Coût: {couches[scouch].cost} points
                        </p>
                      </>
                    ) : (
                      <>
                        <img src={couchPicture[0]} alt="couchpicture" />{" "}
                        <p className={`couch${scouch + 1}`}>
                          {
                            couches.filter(
                              (couch) => couch.id === scouch + 1
                            )[0].name
                          }
                        </p>
                        <p className="point">
                          Coût:{" "}
                          {
                            couches.filter(
                              (couch) => couch.id === scouch + 1
                            )[0].cost
                          }{" "}
                          points
                        </p>
                      </>
                    )}
                  </th>
                ))}
            </tr>
            <tr>
              <th>""</th>
              {selectedCouch &&
                selectedSlot &&
                selectedCouch.map((type) =>
                  selectedSlot.map((slot) => (
                    <th className="hours" key={`${type}${slot}up`}>
                      {slotshours[slot]}
                    </th>
                  ))
                )}
            </tr>
          </thead>
          <tbody>
            {month.map((date) => (
              <tr className="days" key={date}>
                <td>
                  {UpperCase(
                    new Intl.DateTimeFormat("fr-FR", dayoptions).format(date)
                  )}
                </td>
                {selectedCouch.map((type) =>
                  selectedSlot.map((slot) => (
                    <td key={slot}>
                      {reservations &&
                        (reservations
                          .filter(
                            (reservation) =>
                              reservation.couch_id === type &&
                              reservation.slot === slot
                          )
                          .map((resa) =>
                            resa.date
                              .split("T")[0]
                              .split("-")
                              .reverse()
                              .join("/")
                          )
                          .includes(date.toLocaleDateString()) ? (
                          <span>
                            <p
                              className={
                                users.filter(
                                  (usera) =>
                                    usera.id ===
                                    reservations.filter(
                                      (reservation) =>
                                        reservation.couch_id === type &&
                                        reservation.slot === slot &&
                                        reservation.date
                                          .split("T")[0]
                                          .split("-")
                                          .reverse()
                                          .join("/") ===
                                          date.toLocaleDateString()
                                    )[0].user_id
                                )[0].id === user.id
                                  ? "same"
                                  : "ok"
                              }
                            >
                              {
                                users.filter(
                                  (usera) =>
                                    usera.id ===
                                    reservations.filter(
                                      (reservation) =>
                                        reservation.couch_id === type &&
                                        reservation.slot === slot &&
                                        reservation.date
                                          .split("T")[0]
                                          .split("-")
                                          .reverse()
                                          .join("/") ===
                                          date.toLocaleDateString()
                                    )[0].user_id
                                )[0].firstname
                              }
                            </p>
                            <button
                              className={
                                users.filter(
                                  (usera) =>
                                    usera.id ===
                                    reservations.filter(
                                      (reservation) =>
                                        reservation.couch_id === type &&
                                        reservation.slot === slot &&
                                        reservation.date
                                          .split("T")[0]
                                          .split("-")
                                          .reverse()
                                          .join("/") ===
                                          date.toLocaleDateString()
                                    )[0].user_id
                                )[0].id === user.id
                                  ? "visible"
                                  : "hidden"
                              }
                              onClick={() => {
                                hunreservation(
                                  type,
                                  reservations.filter(
                                    (reservation) =>
                                      reservation.couch_id === type &&
                                      reservation.slot === slot &&
                                      reservation.date
                                        .split("T")[0]
                                        .split("-")
                                        .reverse()
                                        .join("/") === date.toLocaleDateString()
                                  )[0].id
                                );
                              }}
                              type="button"
                            >
                              <TbBedOff />
                            </button>
                            {users.filter(
                              (usera) =>
                                usera.id ===
                                reservations.filter(
                                  (reservation) =>
                                    reservation.couch_id === type &&
                                    reservation.slot === slot &&
                                    reservation.date
                                      .split("T")[0]
                                      .split("-")
                                      .reverse()
                                      .join("/") === date.toLocaleDateString()
                                )[0].user_id
                            )[0].points < user.points &&
                            users.filter(
                              (usera) =>
                                usera.id ===
                                reservations.filter(
                                  (reservation) =>
                                    reservation.couch_id === type &&
                                    reservation.slot === slot &&
                                    reservation.date
                                      .split("T")[0]
                                      .split("-")
                                      .reverse()
                                      .join("/") === date.toLocaleDateString()
                                )[0].user_id
                            )[0].id !== user.id ? (
                              <button
                                type="button"
                                className="pushbutton"
                                onClick={() => {
                                  hpush(
                                    date,
                                    type,
                                    slot,
                                    reservations.filter(
                                      (reservation) =>
                                        reservation.couch_id === type &&
                                        reservation.slot === slot &&
                                        reservation.date
                                          .split("T")[0]
                                          .split("-")
                                          .reverse()
                                          .join("/") ===
                                          date.toLocaleDateString()
                                    )[0].user_id
                                  );
                                }}
                              >
                                <MdBackHand />
                              </button>
                            ) : (
                              ""
                            )}
                          </span>
                        ) : (
                          <span>
                            {user.email ? (
                              <button
                                type="button"
                                className="sleepbutton"
                                onClick={() => {
                                  hreservation(date, type, slot);
                                }}
                              >
                                <FaBed />
                              </button>
                            ) : (
                              ""
                            )}
                          </span>
                        ))}
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </Style>
  );
}
