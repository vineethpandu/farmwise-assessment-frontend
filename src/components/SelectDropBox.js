import React, { useState } from 'react';

function SelectDropBox() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select name="Select" onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="Student">Student</option>
        <option value="Salaried">Salaried</option>
        <option value="Business">Business</option>
      </select>

      {selectedOption === "Student" && (
        <button onClick={() => alert('Add Field')}>Add Field</button>
      )}
    </div>
  );
}
export default Select;
