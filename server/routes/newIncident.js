// routes/newIncident.js
const express = require("express");
const router = express.Router();
const { validateIncidentData } = require("../validation");
const knex = require("../knexfile"); // Import Knex configuration

// Define a POST route to create a new incident
router.post("/incidents", async (req, res) => {
  try {
    // Validate the request body
    const validData = validateIncidentData(req.body);
    if (!validData) {
      return res
        .status(400)
        .json({ error: "Invalid or missing data in the request body" });
    }

    // new incident data into the database
    const [incidentId] = await knex("incidents").insert(validData);

    // Fetch the newly inserted incident record
    const newIncident = await knex("incidents").where("id", incidentId).first();

    // Return a success response with the new incident data
    return res.status(201).json(newIncident);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
});

module.exports = router;
