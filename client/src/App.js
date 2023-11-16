import React, { useState } from "react";
import "./App.scss";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
// pages component(s) import
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import { WarehouseDetails } from "./components/WarehouseDetails/WarehouseDetails";
import InventoryList from "./components/InventoryList/InventoryList";
import WarehouseCard from "./components/WarehouseCard/WarehouseCard";
// import InventoryCard from "./components/InventoryCard/InventoryCard";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse"; // Import the EditWarehouse component
import Footer from "./components/Footer/Footer"; // Import the footer component
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import InventoryCard from "./components/InventoryCard/InventoryCard";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import EditInventory from "./components/EditInventory/EditInventory";
import AddInventory from "./components/AddInventory/AddInventory";
import DeleteInventoryModal from "./components/DeleteInventory/DeleteInventory";


function App() {
  const [isDeleteInventoryModalOpen, setDeleteInventoryModalOpen] =
    useState(false);
  const [itemNameToDelete, setItemNameToDelete] = useState(""); // Initialize the item name state

  const openDeleteInventoryModal = (itemName) => {
    setItemNameToDelete(itemName); // Set the item name before opening the modal
    setDeleteInventoryModalOpen(true);
  };

  const closeDeleteInventoryModal = () => {
    setItemNameToDelete(""); // Clear the item name when closing the modal
    setDeleteInventoryModalOpen(false);
  };

  const handleDelete = () => {
    // Handle the deletion logic here, e.g., make an API request.
    // Once deleted, close the Delete Inventory modal.
    closeDeleteInventoryModal();
  };

  const handleCancel = () => {
    // Implement the cancel action here, such as resetting any form fields.
    closeDeleteInventoryModal();
  };

  return (
    <section className="application">
      <Header />
      <Routes>
        <Route path={"/WarehouseList"} element={<WarehouseList />} />
        <Route path={"/WarehouseDetails/:id"} element={<WarehouseDetails />} />
        <Route
          path={"/InventoryDetails/:inventoryid"}
          element={<InventoryDetails />}
        />
        <Route
          path={"/EditWarehouse/:warehouseid"}
          element={<EditWarehouse />}
        />
        <Route path={"/InventoryList"} element={<InventoryList />} />
        <Route path={"/AddInventory"} element={<AddInventory />} />
        <Route path={"/AddWarehouse"} element={<AddWarehouse />} />
        <Route
          path={"/EditInventory/:inventoryid"}
          element={<EditInventory />}
        />
        <Route
          path={"/InventoryDetails/:inventoryid"}
          element={<InventoryDetails />}
        />
        <Route
          path={"/DeleteInventory"}
          element={
            <DeleteInventoryModal
              isOpen={isDeleteInventoryModalOpen}
              onClose={closeDeleteInventoryModal}
              onDelete={handleDelete}
              onCancel={handleCancel}
              itemName={itemNameToDelete} // Pass the item name as a prop
            />
          }
        />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
