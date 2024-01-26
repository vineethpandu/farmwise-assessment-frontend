// MyComponent.js (or similar)
import React, { useState } from 'react';
import TableDisplay from './TableDisplay'; // Adjust the path as needed

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showTable, setShowTable] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setShowTable(false); // Hide table if selection changes
  };

  const handleAddFieldClick = () => {
    setShowTable(true);
  };

  return (
    <div className='InitialForm'>
      <h1>Click Me 👇🏽 ➡️ AddField 👇🏽</h1>
      <select name="Select" onChange={handleSelectChange} className="SelectInit">
        <option value="">Select...</option>
        <option value="Student">Student</option>
        <option value="Salaried">Salaried</option>
        <option value="Business">Business</option>
      </select>

      {selectedOption === "Student" &&(
        <button onClick={handleAddFieldClick}>Add Field</button>
      )}
       {selectedOption === "Salaried" &&(
        <button onClick={handleAddFieldClick}>Add Field</button>
      )}
       {selectedOption === "Business" &&(
        <button onClick={handleAddFieldClick}>Add Field</button>
      )}

      {showTable && <TableDisplay/>}
    </div>
  );
}

export default App;
