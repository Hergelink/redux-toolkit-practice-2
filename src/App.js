import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';
import { handleNameChange } from './redux/namer';
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const { userName } = useSelector((state) => state.handleName);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      dispatch(handleNameChange(value));
    },
    [dispatch],
  )

  return (
    <div className='App'>
      <h1>the count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        increment by 33
      </button>
      <h1>{userName}</h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default App;
