import Navbar from "./components/Navbar/Navbar";
import {auth} from './components/Firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from "./components/Chat/Chat";

const styles = {
  container: 'w-full h-full h-screen',
  section: 'w-full h-full'
}
function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      <div className={styles.container} >
        <section className={styles.section} >
          <Navbar />
          {user ? <Chat /> : null}
        </section>
      </div>
    </>
  );
}

export default App;
