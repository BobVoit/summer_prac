import './styles/index.scss';
import Image from './components/Image';
import Field from './components/Field';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main">
          <Image />  
          <div className="fields">
            <Field />
            <Field />
            <Field />
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default App;
