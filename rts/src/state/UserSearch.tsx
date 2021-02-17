import { useState } from 'react';

const users = [
  {
    id: 1,
    name: 'Yugi',
    age: 20,
  },
  {
    id: 2,
    name: 'Arjan',
    age: 20,
  },
  {
    id: 3,
    name: 'Nikki',
    age: 20,
  },
];
const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{
    id: number;
    name: string;
    age: number | undefined;
  }>();

  const handleSearchUser = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search:</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleSearchUser}>Search User...</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
