import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import GratitudeForm from './GratitudeForm'
import EntryList from './EntryList'

function App() {

  //the {} makes it lazy initialiser, itll only run once the component first mounts, saves performance
  const [entries, setEntries] = useState(()=>{
    //look inside localStorage for gratitude entries
    const stored = localStorage.getItem('gratitudeEntries')
    //if something is found use JSON.parse to convert saved string back to array
    //local storage only stores strings so JSON.parse is used to convert back to useable JS
    //if nothing is found, start with empty array
    return stored ? JSON.parse(stored) : []
  })

  //newEntry = i'm getting some data from somewhere and calling it newEntry
  const addEntry = (newEntry) =>{
    //making sure user doesnt submit empty entry
    if(newEntry.trim() !== ''){
      //creates new array, starting with new entry followed by old ones
      setEntries([newEntry, ...entries])
    }
  }

  useEffect(()=>{
    //turns entries array into a string and stores in local storage under 'gratitudeEntires'
    localStorage.setItem('gratitudeEntries', JSON.stringify(entries))
    //runs everytime entries array changes
  }, [entries])

  return (
    <div className="container">
      <h1>Gratitude Journal ⭐</h1>
      <GratitudeForm onAddEntry={addEntry}/>
      {/* display component  */}
      <EntryList entries={entries}/>
      
    </div>
  );
}

export default App;
