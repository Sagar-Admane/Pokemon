import React, { useContext, useState } from 'react'
import style from "./input.module.scss"
import { change } from '../context/context';
import { isOkay } from '../context/context';


function Input(props) {
  const [ultra, setUltra] = useState("");
  const value = useContext(change);
  const search = useContext(isOkay);


  const handleSearch = ((e) => {
    setUltra(e.target.value);
  })
  
  function handleSubmit(e){
    e.preventDefault();
    value.setPoke(ultra);
  }

  function handleKey(e){
    if(e.key === "Enter"){
      e.preventDefault();
      value.setPoke(ultra);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onKeyPress={handleKey}>
      <input type={props.type} placeholder={props.placeholder} className={style.input} onChange={handleSearch} />
      {/* {console.log(ultra)} */}

      </form>
    </div>
  )
}

export default Input;
