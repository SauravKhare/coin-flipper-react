import { useState } from 'react';
import CoinFlipper from './components/CoinFlipper';
import Coin from './components/Coin';
import './App.css';

function App() {
  const [coinSide, setCoinSide] = useState('Heads/Tails');
  const coinChangeHandler = (gotCoinSide) =>{
    setCoinSide(gotCoinSide);
  }
  return (
    <div className="App">
      <h1>Coin Flipper</h1>
      <Coin coin={coinSide}/>
      <CoinFlipper onCoinChange={coinChangeHandler}/>
    </div>
  );
}

export default App;
