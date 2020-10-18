import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Profile from './components/Profile/Profile';

function App() {
  const [persons,setPersons]=useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res =>res.json())
    .then(data =>
      {
        setPersons(data.results);
        console.log(data.results)
    })
    .catch(error =>console.log(error))
  },[])
  return (
    <div className="App">
      <h1>Profile Loaded: {persons.length}</h1>
      <ul>
        {
          persons.map(person =><Profile person={person} key={person.registered.date}></Profile>)
        }
      </ul>
    </div>
  );
}

export default App;
