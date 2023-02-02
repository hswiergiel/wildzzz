const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  insert(reservation) {
    return this.connection.query(
      `insert into ${this.table} (user_id, couch_id, date, slot) values (?,?,?,?)`,
      [
        reservation.user_id,
        reservation.couch_id,
        reservation.date,
        reservation.slot,
      ]
    );
  }

  update(reservation) {
    return this.connection.query(
      `update ${this.table} set user_id = ? where user_id=? and couch_id=? and date=? and slot=? `,
      [
        reservation.user_id,
        reservation.pushed_id,
        reservation.couch_id,
        reservation.date,
        reservation.slot,
      ]
    );
  }
}

module.exports = ReservationManager;
