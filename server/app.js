const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const knex = require("knex")(require("./knexfile"));

app.use(express.json());

// Create a router for the inventory API
const inventoryRouter = express.Router();

// Define a route for retrieving a single inventory item
inventoryRouter.get("/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    // Use Knex to query the "inventory" table in your database
    const inventoryItem = await knex("inventory")
      .select(
        "id",
        "impact_condition",
        "item_name",
        "description",
        "category",
        "status",
        "quantity"
      )
      .where("id", itemId) // Filter by the provided item ID
      .first();

    if (!inventoryItem) {
      // If no item is found with the given ID, return a 404 Not Found response
      res.status(404).json({ error: "Item not found" });
    } else {
      // If an item is found, return a 200 OK response with the item details
      res.status(200).json(inventoryItem);
    }
  } catch (error) {
    // Handle any unexpected errors with a 500 Internal Server Error response
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define a route for creating a new inventory item
inventoryRouter.post("/", async (req, res) => {
  const newItem = req.body; // The new item details are sent in the request body

  try {
    // Use Knex to insert the new item into the "inventory" table
    const [insertedId] = await knex("inventory").insert(newItem);
    res.status(201).json({
      id: insertedId,
      ...newItem,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Use the inventory router for routes starting with "/api/inventories"
app.use("/api/inventories", inventoryRouter);

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
