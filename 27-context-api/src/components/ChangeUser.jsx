import UserContext from '../context/UserContext';
import { useContext } from 'react';
const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <button onClick={() => setUser(user === 'Bogdan' ? 'Alice' : 'Bogdan')}>
      Change!
    </button>
  );
};

export default ChangeUser;
