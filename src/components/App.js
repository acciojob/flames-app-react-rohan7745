import React, { useState } from 'react';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');

  const calculateRelationship = () => {
    if (name1.trim() === '' || name2.trim() === '') {
      setRelationshipStatus('Please Enter valid input');
      return;
    }

    const name1Array = name1.split('');
    const name2Array = name2.split('');

    for (let i = 0; i < name1Array.length; i++) {
      for (let j = 0; j < name2Array.length; j++) {
        if (name1Array[i] === name2Array[j]) {
          name1Array.splice(i, 1);
          name2Array.splice(j, 1);
          i--;
          break;
        }
      }
    }

    const remainingLength = (name1Array.length + name2Array.length) % 6;

    switch (remainingLength) {
      case 1:
        setRelationshipStatus('Friends');
        break;
      case 2:
        setRelationshipStatus('Love');
        break;
      case 3:
        setRelationshipStatus('Affection');
        break;
      case 4:
        setRelationshipStatus('Marriage');
        break;
      case 5:
        setRelationshipStatus('Enemy');
        break;
      case 0:
        setRelationshipStatus('Siblings');
        break;
      default:
        setRelationshipStatus('Error');
    }
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setRelationshipStatus('');
  };

  return (
    <div>
      <label>
        First Name:
        <input
          type="text"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          data-testid="input1"
        />
      </label>
      <br />
      <label>
        Second Name:
        <input
          type="text"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          data-testid="input2"
        />
      </label>
      <br />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={clearInputs} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationshipStatus}</h3>
    </div>
  );
};

export default App;
