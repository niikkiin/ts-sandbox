import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleAddGuest = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddGuest}>Add Guest</button>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </>
  );
};

export default GuestList;
