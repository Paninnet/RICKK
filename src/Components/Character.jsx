import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import classes from './Character.module.css'
import { SelectedCharacter } from './SelectedCaharcter'




export const Character = (props) => {


   return (
      <Switch>
         <Route exact path="/">
            <NavLink className={classes.link} to={`/selected/${props.data.id}`}>
               <div className={classes.character_wrapper}>
                  <img className={classes.foto} src={props.data.image} alt="Фото"></img>
                  <h2 className={classes.name}>{props.data.name}</h2>
               </div>
            </NavLink>
         </Route>
      </Switch >

   )
}