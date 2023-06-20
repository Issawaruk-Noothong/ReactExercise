import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <Header />
      <div className="MyContent">
        <h2>{num}</h2>
        <button onClick={()=>setNum(num+1)} type="button" class="btn btn-primary">เพิ่ม</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button onClick={()=>setNum(num-1)} type="button" class="btn btn-primary">ลด</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
