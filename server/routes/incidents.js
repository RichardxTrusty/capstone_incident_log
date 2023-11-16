const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incident-controller");

router.route("/").get(incidentController.index);
//First ID avises that we are looking to use single incident parameter
router.route("/:id").get(incidentController.singleIncident);
router.route("/:id").put(incidentController.editIncident);

router.route("/").post(incidentController.addIncident);

router.route("/:id").delete(incidentController.deleteIncident);

module.exports = router;
