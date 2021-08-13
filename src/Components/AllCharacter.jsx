import React, { useEffect, useState } from 'react'
import { Character } from './Character'
import classes from './AllCharacter.module.css'
import { NavLink, Route } from 'react-router-dom'
import { SelectedCharacter } from './SelectedCaharcter'

export default function AllCharacter() {

   
  

   const [data, setData] = useState([])
   const [page, setPage] = useState(1)
   const [fetching, setFetching] = useState(true)
   const [totalPage, setTotalpage] = useState(0)
   const [inputText, setInputText] = useState("")

   useEffect(() => {
      if (fetching && totalPage <= 33) {
         fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => response.json())
            .then(dat => {
               setData([...data, ...dat.results])
               setPage(prev => prev + 1)
               setTotalpage(prev => prev + 1)
            })
            .finally(() => setFetching(false))
      }
   }, [fetching])

   useEffect(() => {
      document.addEventListener("scroll", scrollHandler)
      return function () {
         document.removeEventListener("scroll", scrollHandler)
      }
   }, [])

    // const [data,setData] = useState([])
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character?name=${inputText}`)
      .then(res => res.ok ? res : Promise.reject(res))
      .then(response =>response.json())
      .then(dat =>{
         setData([...dat.results])
         console.log(dat.info.pages);
         
         
      })
    
   }, [inputText])


   const Characters = data.map((item) => {
      return <Character data={item} />
   })

   const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
         setFetching(true)
      }
   }

   return (
      <div>
         <Route exact path='/'> <input className='search' type='text' onChange={e => setInputText((e.target.value).toLowerCase())} value={inputText} placeholder="character name:"></input> </Route>
         <div className={classes.all_wrapper}>
            {Characters}
            <Route path={`/selected/:id`} data={data} component={SelectedCharacter}></Route>
         </div>
      </div>

   )
}