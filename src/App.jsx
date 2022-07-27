// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import Global from './styles/global';

function App() {
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/", {
      method: "GET"
    })
    .then(resp => resp.json())
    .then(resp => setCharacterList(resp.results))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Global />
      <Header></Header>
      <Characters characterList={characterList}></Characters>
    </div>
  );
}

export default App;
