import './App.css';
import Counter from './components/Counter';
import Feed from './components/Feed';

export default function App() {
  return (
    <div className='app'>
      <div className='bgTop'>
        <Counter/>
        <div className="container">
          <img src="images/logoP5Royal.png" alt="Logo Persona 5 Royal" className="logoP5"/>
        </div>
      </div>
        <div className='bgFeed'>
          <Feed/>

        </div>
    </div>  
  );
}
