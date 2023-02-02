const models = require("../models");

const verifyUser = (req, res) => {
  const user = req.body;
  models.user
    .verify(user)
    .then(([users]) => {
      if (users[0] !== null) {
        [req.user] = users;
        res.send(users).status(200);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  verifyUser,
};
