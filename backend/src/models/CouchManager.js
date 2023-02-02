const AbstractManager = require("./AbstractManager");

class CouchManager extends AbstractManager {
  constructor() {
    super({ table: "couch" });
  }

  insert(couch) {
    return this.connection.query(
      `insert into ${this.table} (name,type,picture,cost,description) values (?,?,?,?,?)`,
      [couch.name, couch.type, couch.picture, couch.cost, couch.description]
    );
  }

  update(couch) {
    return this.connection.query(
      `update ${this.table} set name = ?, type = ?, picture = ?, cost = ?, description= ? where id = ?`,
      [
        couch.name,
        couch.type,
        couch.picture,
        couch.cost,
        couch.description,
        couch.id,
      ]
    );
  }
}

module.exports = CouchManager;
