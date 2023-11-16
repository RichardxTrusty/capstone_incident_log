const express = require("express");
const app = express();

// cors
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const knex = require("knex");
const newIncidentRoutes = require("./routes/newIncident"); // Import to NewIncident File 

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5050;

const incidentRoutes = require("./routes/incidents");

// Use the New Incident route
app.use("/api", newIncidentRoutes);

app.use("/incidents", incidentRoutes);

app.get("/", (req, res) => {
  res.send("It's the API");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
