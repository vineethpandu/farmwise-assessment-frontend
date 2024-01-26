import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";




const TableDisplay = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    FieldType: "",
     phoneNumber: "",
    FieldDataType: "",
    MinDate: "",
    MaxDate: "",
    Mandatory: "",
     address: "",
  });

  const [editFormData, setEditFormData] = useState({
    FieldType: "",
     phoneNumber: "",
    FieldDataType: "",
    MinDate: "",
    MaxDate: "",
    Mandatory: "",
     address: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    if (contacts.length >= 4) {
      alert("Maximum of 4 fields can be added.");
      return;
    }

    const newContact = {
      id: nanoid(),
      FieldType: addFormData.FieldType,
       phoneNumber: addFormData.phoneNumber,
      FieldDataType: addFormData.FieldDataType,
      MinDate: addFormData.MinDate,
      MaxDate: addFormData.MaxDate,
      Mandatory: addFormData.Mandatory,
      address: addFormData.address,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      FieldType: editFormData.FieldType,
      phoneNumber: editFormData.phoneNumber,
      FieldDataType: editFormData.FieldDataType,
      MinDate: editFormData.MinDate,
      MaxDate: editFormData.MaxDate,
      Mandatory: editFormData.Mandatory,
       address: editFormData.address,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      FieldType: contact.FieldType,
        phoneNumber: contact.phoneNumber,
      FieldDataType: contact.FieldDataType,
      MinDate: contact.MinDate,
      MaxDate: contact.MaxDate,
      Mandatory: contact.Mandatory,
       address: contact.address,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

   const handleResetClick = () => {
    setContacts([]); // Resets the contacts array to an empty array
  };
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);
  const handleSaveContacts = () => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    alert("Contacts saved !")
  };


const [formStyle, setFormStyle] = useState({});


const handleClarityClick = () => {
  setFormStyle({
    display: 'inline-block',
    alignItems: 'center', // Corrected property name and added quotes
    gap: '5px'
    // Add other styles as needed
  });
};
  return (
    <div className="table-responsive">
    <div className="app-container">
      <h2>Add a Contact</h2>
     <div className="add-form">
   <form onSubmit={handleAddFormSubmit} style={formStyle} >
        <div>
          <label htmlFor="FieldType">Field Type:</label>
          <select id="FieldType" name="FieldType" value={addFormData.FieldType} onChange={handleAddFormChange}>
            <option >NULL</option>
            <option value="TextBox">TextBox</option>
            <option value="DropBox">DropBox</option>
            <option value="DatePicker">DatePicker</option>
          </select>
        </div>

<div >
     <label htmlFor="Field Dispaly Name" >Field Display Name:</label>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
      
</div>
        <div>
          <label htmlFor="FieldDataType">Field Data Type:</label>
          <select id="FieldDataType" name="FieldDataType" value={addFormData.FieldDataType} onChange={handleAddFormChange}>
             <option value="Number">NULL</option>
            <option value="Date">Date</option>
            <option value="Number">Number</option>
            <option value="String">String</option>
          </select>
        </div>



        <div>
          <label htmlFor="MinDate">Min Date:</label>
          <input type="date" id="MinDate" name="MinDate" value={addFormData.MinDate} onChange={handleAddFormChange} />
        <br/>
        </div>

        <div>
          <label htmlFor="MaxDate">Max Date:</label>
          <input type="date" id="MaxDate" name="MaxDate" value={addFormData.MaxDate} onChange={handleAddFormChange} />
        </div>

        <div>
          <label htmlFor="Mandatory">Mandatory:</label>
          <select id="Mandatory" name="Mandatory" value={addFormData.Mandatory} onChange={handleAddFormChange}>
            <option  >NULL</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
<div>
 
    <label htmlFor="FieldData">FieldDisplay Data:</label>
         <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
</div>
<div>
        <button type="submit">Confirm</button></div>
      </form></div>

      <form onSubmit={handleEditFormSubmit}>
        <div className="app-container" >
          <button onClick={handleClarityClick} className="btn btn-1">Click Me! 👉 I Will  Handle Form Clarity</button>
<h1 >List Of Added Feilds ⬇️(All contact will add below if you click confirm button)</h1>
      <div>
        <table>
          <thead>
            
            <tr> 
              <th>Field Type</th>
              <th>Phone Number</th>
              <th>Field Data Type</th>
              <th>Min Date</th>
              <th>Max Date</th>
              <th>Mandatory</th>
              <th>FieldData</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table> </div> </div>
      </form>
       
       <button onClick={handleResetClick}>Reset Table</button> {/* Reset button */}
     
        <button onClick={handleSaveContacts}>Save Data</button>
       <h3>(⛔ if you click the save button data will be stored in Redux, this data should be retained even after
page reload. if you want to delete row click delete option)</h3>
    </div></div>
  );
};

export default TableDisplay;
