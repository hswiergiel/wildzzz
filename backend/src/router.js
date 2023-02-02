const express = require("express");

const router = express.Router();

const reservationControllers = require("./controllers/reservationControllers");
const userControllers = require("./controllers/userControllers");
const couchControllers = require("./controllers/couchControllers");
const { verifyUser } = require("./services/authentification");

router.get("/reservations", reservationControllers.browse);
router.get("/reservations/:id", reservationControllers.read);
router.put("/reservations/", reservationControllers.edit);
router.post("/reservations", reservationControllers.add);
router.delete("/reservations/:id", reservationControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/couches", couchControllers.browse);
router.get("/couches/:id", couchControllers.read);
router.put("/couches/:id", couchControllers.edit);
router.post("/couches", couchControllers.add);
router.delete("/couches/:id", couchControllers.destroy);

router.post("/login", verifyUser);

module.exports = router;
