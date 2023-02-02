const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname,lastname,email,password,points) values (?,?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.password, user.points]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, password = ?, points= ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.points,
        user.id,
      ]
    );
  }

  verify(user) {
    return this.connection.query(
      `select * from ${this.table} where email = ? and password=?`,
      [user.email, user.password]
    );
  }
}

module.exports = UserManager;
