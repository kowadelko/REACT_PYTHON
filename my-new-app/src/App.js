import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASHED_KEY = process.env.REACT_APP_UNSPLASHED_KEY;

function App() {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASHED_KEY}`)
      .then((res)  => res.json())
      .then((data)=> {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
    setWord('');
    
  }

  
  return (
    <div>
      <Header title= "perros salchicha on travel"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/> 
    </div>
  );
}

export default App;
