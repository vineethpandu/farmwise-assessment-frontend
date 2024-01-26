import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
     
      <td>{contact.FieldType}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.FieldDataType}</td>
      <td>{contact.MinDate}</td>
      <td>{contact.MaxDate}</td>
      <td>{contact.Mandatory}</td>
      <td>{contact.address}</td>
    
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
