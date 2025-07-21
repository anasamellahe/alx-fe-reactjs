import './App.css'
import ProfilePage from './components/ProfilePage';
import UserProfile from './components/UserProfile';
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const ProfileData = {name: "anas", age: 20, bio: "anas amellahe ..."};

  return (
    <>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <UserContext.Provider value = {ProfileData}>
        <UserProfile/>
      </UserContext.Provider>
    </>
  );
}

export default App;
