import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Nav from './Nav'
import style from './Home.module.css'
const Home = () => {
    const [Data,setData] = useState([])
    const [search,setsearch] = useState('')
    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
        .then(response =>{
            setData(response.data.books)
        })
    },[])
    // console.log(Data)

    function SearchBtn(e){
        setsearch(e.target.value) 
    }
    
  return (
    <div>
      <Nav/>
      <input type="search" onChange={(e)=>SearchBtn(e)} placeholder='Search here' className={style.input}/>
      <div className={style.body}>
      {Data.filter((item)=>item.title.toLowerCase().includes(search))
      .map((item,index)=>{
        return(
            <div key={index} className={style.Box}>
                <img src={item.imageLinks.smallThumbnail} alt="" />
                <h1 className={style.title}>{item.title}</h1>
                <div className={style.rate}>
                    <p>{item.averageRating}⭐</p>
                    <p>FREE</p>
                </div>
            </div>

        )
      })}
      </div>
    </div>
  )
}

export default Home
