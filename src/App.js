import React, {useState, useEffect} from 'react';
import axios from 'axios';

 
const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(res => {
      setCharacters(res.data)
    }).catch(err => console.error(err))
  } , [])
 
 
 
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
     <h1 className="Header">Characters from Star Wars</h1>
     {characters.map(character => {
       return (
         <div key ={character.name} className='user-wrapper'>
           <h2>Name: {character.name}</h2>
           <p>Birthyear: {character.birth_year}</p>
           <p>Skin Color: {character.skin_color}</p>
 
 
         </div>
       )
     })}
   </div>
 );
}


export default App;
