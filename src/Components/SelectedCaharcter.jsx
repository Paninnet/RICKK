import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './SelectedCharacter.module.css'

export const SelectedCharacter = (props) => {
   const [data, setData] = useState({})


   useEffect(() => {
      let person_id = +props.match.params.id
      fetch(`https://rickandmortyapi.com/api/character/${person_id}`)
         .then(response => response.json())
         .then(dat => {
            setData(dat)
            console.log(dat);
            console.log(data);
         })

   }, [])

 
   console.log(+props.match.params.id);
   return (
      <div className={classes.wrapper}>
         <div className={classes.selected_wrapper}>
            <div>
               <img alt="img" src={data.image}></img>
            </div>
            <div>
               <h2>Name: {data.name} </h2>
               <h2>Gender: {data.gender}</h2>
               <h2>Species: {data.species}</h2>
               <h2>Status: {data.status}</h2>
               {/* <h2>Location: {JSON.stringify(data.location)}</h2> */}
            </div>

         </div>
         <NavLink className={classes.back} to="/RICKK/"><button>Назад</button></NavLink>
      </div>
   )
}