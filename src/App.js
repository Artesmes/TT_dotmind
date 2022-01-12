import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import LeftPage from './components/LeftPage';
import RightPage from './components/RightPage';

function App() {
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1&delay=1').then((res) => {
      const data = res.data.data
      var favoris = JSON.parse(localStorage.getItem("favoris"))
    if (!favoris) favoris = []
      data.forEach((element) => {
        if (favoris.includes(element.id)) element.favorite = true
        else element.favorite = false;
      })
      setFavoris(favoris)
      setUsers(data)
    })
  },[])
  const [users, setUsers] = useState([])
  const [favoris, setFavoris] = useState([])
  return (
    <div className="App">
      <div className="left"><LeftPage users= {users} setUsers= {setUsers} favoris={favoris} setFavoris={setFavoris}/></div>
      <div className="right"><RightPage users= {users} setUsers= {setUsers} /></div>
    </div>
  );
}

export default App;
