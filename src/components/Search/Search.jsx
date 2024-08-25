import React from 'react'
import style from "./Search.module.scss";
import Input from '../../Items/Input';
import { CiSearch } from "react-icons/ci";


function Search() {
  return (
    <div className={style.container}>
        <form>
        <div className={style.search}>
            <CiSearch className={style.img} size={25} />
            <Input type={"text"} placeholder={"Search Pokemon"} />
        </div>
        </form>
    </div>
  )
}

export default Search
