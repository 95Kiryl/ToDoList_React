import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { useState } from 'react';

const ChangeUser = () => {
  const { setUser } = useContext(UserContext);

  const [userName, setUserName] = useState('');

  return (
    <>
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={() => {
          if (!userName) {
            setUser('Enter new name');
          } else {
            setUser(userName);
            setUserName('');
          }
        }}
      >
        Change!
      </button>
    </>
  );
};

export default ChangeUser;
