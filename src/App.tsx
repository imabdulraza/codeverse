import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './Redux/Actions/actions'
import { ButtonGroup, Button } from '@mui/material';

function App() {
  // state managed by redux
  const counter = useSelector((state: any) => state.counter);
  const isLogged = useSelector((state: any) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h2>codeverse</h2>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={() => dispatch(increment(5))}>+</Button>
            <Button>{counter}</Button>
            <Button onClick={() => dispatch(decrement())}>-</Button>
          </ButtonGroup>
        { isLogged ? <p>welcome user</p> : ""}
      </header>
    </div>
  );
}

export default App;
