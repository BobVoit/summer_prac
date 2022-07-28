import { useState, useEffect } from 'react';
import './styles/index.scss';
import Image from './components/Image';
import Field from './components/Field';
import Buttom from './components/Button';
import { squareParallelogram } from "./modules/commonModule";
import Text from './components/Text';
import Title from './components/Title';

function App() {
  const [a, aSetValue] = useState(0);
  const [b, bSetValue] = useState(0);
  const [alpha, alphaSetValue] = useState(0);
  const [square, squareSetValue] = useState(0);
  const title = "Вычисление площади параллелограмма по двум смежным сторонам и углу между ними";

  useEffect(() => {
    document.title = title
  }, []);

  const getSquareParallelogram = () => {
    const result = squareParallelogram(a, b, alpha);
    squareSetValue(result);
  };
  
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main">
          <Title 
            text={title}
          />
          <Image />  
          <div className="fields">
            <Field 
              name="Сторона a" 
              value={a}
              change={e => aSetValue(e.target.value)}
              placeholder="Введите длину сторону а"
              onlyNumbers={true}
            />
            <Field 
              name="Сторона b"
              value={b}
              change={e => bSetValue(e.target.value)} 
              placeholder="Введите длину сторону b"
              onlyNumbers={true}
            />
            <Field 
              name="Угол alpha" 
              value={alpha}
              change={e => alphaSetValue(e.target.value)}
              placeholder="Введите угол между сторонами"
              onlyNumbers={true}
            />
          <div className="commands">
            <Buttom 
              text="Вычислить"
              onClick={getSquareParallelogram}
            />
          </div> 
          <div>
          <Field 
              name="Результат"
              value={square} 
              readOnly={true} 
            />
          </div>
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default App;
