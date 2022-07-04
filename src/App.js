import { useState } from 'react';
import './styles/index.scss';
import Image from './components/Image';
import Field from './components/Field';

function App() {
  const [a, aSetValue] = useState(0);
  const [b, bSetValue] = useState(0);
  const [alpha, alphaSetValue] = useState(0);
  
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main">
          <Image />  
          <div className="fields">
            <Field 
              name="Сторона a" 
              value={a}
              change={e => aSetValue(e.target.value)}
            />
            <Field 
              name="Сторона b"
              value={b}
              change={e => bSetValue(e.target.value)} 
            />
            <Field 
              name="Угол alpha" 
              value={alpha}
              change={e => alphaSetValue(e.target.value)}
            />
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default App;
