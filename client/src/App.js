import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Login from './pages/Login'

const socket = io.connect('http://localhost:4000'); 

function App() {
  const [username, setUsername] = useState(''); // Add this
  const [room, setRoom] = useState('');
  return (
   <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={< Login
           username={username} 
           setUsername={setUsername} 
           room={room} 
           setRoom={setRoom}
           socket={socket}  />
           } />
        </Routes>

      </div>

  </Router>

  );
}

export default App;
