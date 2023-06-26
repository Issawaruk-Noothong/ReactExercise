import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [resultText, setResultText] = useState('');

  const increaseNum = () => {
    setNum(num + 1);
    checkPrimeNumber(num + 1);
  };

  const decreaseNum = () => {
    setNum(num - 1);
    checkPrimeNumber(num - 1);
  };

  const checkPrimeNumber = (number) => {
  let result = '';

  if (number <= 1) {
    result = `${number} <strong>ไม่</strong>เป็นจำนวนเฉพาะs`;
  } else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      result = `${number} เป็นจำนวนเฉพาะ`;
    } else {
      result = `${number} <strong>ไม่</strong>เป็นจำนวนเฉพาะ`;
    }
  }

  setResultText(result);
};

  return (
    <div className="App">
      <Header />
      <div className="MyContent">
      <h1>{num}</h1><br></br>
      <button onClick={increaseNum} className="btn btn-primary">เพิ่ม</button>
      &nbsp;&nbsp;
      <button onClick={decreaseNum} className="btn btn-primary">ลด</button>
      <br></br><br></br>
      <span dangerouslySetInnerHTML={{ __html: resultText }}></span>
      </div>
    <Footer />
    </div>
  );
}

export default App;