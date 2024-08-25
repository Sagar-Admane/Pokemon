import React, { useState } from 'react'
import style from "./app.module.scss"
import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';
import { change } from '../context/context';
import { isOkay } from '../context/context';

function App() {
  const [poke, setPoke] = useState("");
  const [search, setSearch] = useState(false);
  return (
    <isOkay.Provider value={{search, setSearch}}>
    <change.Provider value={{poke, setPoke}}>
    
    <div className={style.container}>
      <div className={style.heading}>
        <h1>Pokemon Dictionary</h1>
      </div>
      <div className={style.search}>
        <Search />
      </div>
      
      <div className={style.cards}>
        <Cards />
      </div>
    </div>
    
    </change.Provider>
    </isOkay.Provider>
  )
}

export default App;