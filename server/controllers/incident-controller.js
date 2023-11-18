const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  knex("incidents")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving incidents: ${err}`));
};

const singleIncident = (req, res) => {
  knex
    .from("incidents")
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving individual incident: ${err}`)
    );
};

const deleteIncident = (req, res) => {
  const incidentId = req.params.id;
  knex("incidents")
    .where({ id: incidentId })
    .del() // Delete the incident
    .then((result) => {
      if (result === 0) {
        res.status(404).json(`Incident not found: ${err}`);
      } else {
        res.status(204).end();
      }
    })
    .catch((err) => res.status(500).json(`Error deleting incident: ${err}`));
};

const editIncident = (req, res) => {
  console.log("body", req.body);
  knex("incidents")
    .where({ id: req.params.id })
    .update({ ...req.body })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Unable to edit incident infromation: ${err}` });
    });
};

const addIncident = (req, res) => {
  if (!req.body.reporter_email || !req.body.reporter_phone) {
    return res.status(400).send("Please fill out all fields");
  }

  knex("incidents")
    .insert(req.body)
    .then((result) => {
      return knex("incidents").where({ id: result[0] });
    })
    .then((createdIncident) => {
      res.status(201).json(createdIncident);
    })
    .catch((e) => {
      console.log("ERR", e);
      res.status(500).json({ message: "Unable to create a new incident" });
    });
};

module.exports = {
  index,
  singleIncident,
  editIncident,
  addIncident,
  deleteIncident,
};
