import React, { useContext, useState } from 'react'
import style from "./cards.module.scss"
import data from "../../Data/data.json"
import { change } from '../../context/context'
import { isOkay } from '../../context/context'

function Cards  () {
  
  
  const sea = useContext(isOkay);
  const value = useContext(change);
  var filtered;
  
  

  // if(abc === true){
  //   filtered = data.filter((item) => {
  //     item.name.toLowerCase().includes(value.poke);
  //     console.log(filtered)
  //   })
  //   setResult(filtered)
  // }

  if(value.poke.length > 0){
    console.log(true);
    filtered = data.filter((item) => {
      return item.name.toLowerCase().includes(value.poke.toLowerCase());
      })
  }

  return (
    <div className={style.container}>
      <div className={style.cards}>
        {console.log(value.poke)}
        {
          
          (!value.poke.length) ? (
            data.map((item) => {
              return(
                <div className={style.img}>
                <img src={item.url} name={item.name} alt='' height={200}  />
                <p>{item.name}</p>
                </div>
              )
            })
          ) : ( 
            console.log(filtered),
            filtered.map((item) => {
              return(
                <div className={style.img}>
                <img src={item.url} name={item.name} alt='' height={200}  />
                <p>{item.name}</p>
                </div>
              )
            })
          )
          
        }
      </div>
    </div>
  )
}

export default Cards
