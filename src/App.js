import './App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Send a reminder to your future self</h1>
        <Button variant="contained" color="info">Get Started</Button>
      </header>
    </div>
    
  );
}

export default App;
