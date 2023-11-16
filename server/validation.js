function validateIncidentData(data) {
  if (!data || typeof data !== "object") {
    return false; // Data is missing or not an object
  }

  if (
    typeof data.impact_condition !== "string" ||
    data.impact_condition.trim() === ""
  ) {
    return false; // Warehouse name is missing or not a non-empty string
  }

  if (
    typeof data.event_begin_date !== "string" ||
    data.event_begin_date.trim() === ""
  ) {
    return false; // Address is missing or not a non-empty string
  }

  if (
    typeof data.number_of_affected_users !== "string" ||
    data.number_of_affected_users.trim() === ""
  ) {
    return false; // City is missing or not a non-empty string
  }

  if (
    typeof data.management_group !== "string" ||
    data.management_group.trim() === ""
  ) {
    return false; // Country is missing or not a non-empty string
  }

  if (
    typeof data.reporter_name !== "string" ||
    data.reporter_name.trim() === ""
  ) {
    return false; // Contact name is missing or not a non-empty string
  }

  if (
    typeof data.reporter_position !== "string" ||
    data.reporter_position.trim() === ""
  ) {
    return false; // Contact position is missing or not a non-empty string
  }

  // You can add more specific checks for phone number and email formats

  return true; // All validation checks pass
}

module.exports = { validateIncidentData };
