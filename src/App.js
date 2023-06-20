import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [resultText, setResultText] = useState('');

  const increaseNum = () => {
    setNum(num + 1);
    checkOddOrEven(num + 1);
  };

  const decreaseNum = () => {
    setNum(num - 1);
    checkOddOrEven(num - 1);
  };

  const checkOddOrEven = (number) => {
    let result = '';
    if (number % 2 === 0) {
      result = `${number} <strong>ไม่</strong>เป็นจำนวนเฉพาะ`;
    } else {
      result = `${number} เป็นจำนวนเฉพาะ`;
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