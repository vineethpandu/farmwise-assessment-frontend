import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
  
      {/* FieldType Dropdown */}
      <td>
        <select
          name="FieldType"
          value={editFormData.FieldType}
          onChange={handleEditFormChange}
        >
          <option value="TextBox">TextBox</option>
          <option value="DropBox">DropBox</option>
          <option value="DatePicker">DatePicker</option>
        </select>
      </td>
      {/* Field Data Type Dropdown */}
      <td>
        <select
          name="FieldDataType"
          value={editFormData.FieldDataType}
          onChange={handleEditFormChange}
        >
          <option value="Date">Date</option>
          <option value="Number">Number</option>
          <option value="String">String</option>
        </select>
      </td>
      {/* Min Date */}
      <td>
        <input
          type="date"
          name="MinDate"
          value={editFormData.MinDate}
          onChange={handleEditFormChange}
        />
      </td>
      {/* Max Date */}
      <td>
        <input
          type="date"
          name="MaxDate"
          value={editFormData.MaxDate}
          onChange={handleEditFormChange}
        />
      </td>
      {/* Mandatory Dropdown */}
      <td>
        <select
          name="Mandatory"
          value={editFormData.Mandatory}
          onChange={handleEditFormChange}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
