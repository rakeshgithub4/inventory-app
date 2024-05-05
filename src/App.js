import './App.css';
import { useDispatch } from 'react-redux';
import Inventory from './components/Inventory';
function App() {
  const dispatch = useDispatch();

  return (
    <>
    <Inventory />
    </>
  );
}

export default App;
