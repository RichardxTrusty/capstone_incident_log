import React from "react";
import "./DeleteInventory.scss";

const DeleteInventoryModal = ({
  isOpen,
  onClose,
  onDelete,
  onCancel,
  itemName,
}) => {
  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Delete {itemName} inventory item?</h2>
        <p>
          Please confirm that you'd like to delete {itemName} from the inventory
          list. You won't be able to undo this action.
        </p>
        <div className="button-container">
          <button onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button onClick={onDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteInventoryModal;
