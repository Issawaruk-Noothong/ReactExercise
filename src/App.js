import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  let OddorEven = "ข้อความ";
  var textno = " ไม่";
  let IsnotEven = textno.bold();
    if (num%2===0){
      OddorEven = num + IsnotEven + "เป็นจำนวนเฉพาะ";
    } else if(num%2!==0){
      OddorEven = num + " เป็นจำนวนเฉพาะ";
    }
    document.getElementById("number").innerHTML = OddorEven;
  return (
    <div className="App">
      <Header />
      <div className="MyContent">
        <h2>{num}</h2><br></br>
        <button className="btn btn-primary" onClick={()=>setNum(num+1)}>เพิ่ม</button>
        &nbsp;&nbsp;
        <button className="btn btn-primary" onClick={()=>setNum(num-1)}>ลด</button>
        <br></br><br></br>
        <span id="number"></span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
