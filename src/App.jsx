import { useState } from 'react'
import './App.css'
import { Usercard } from './Usercard'



function App() {

  const userData =[{
    name:'VIJI',
    profile:'src/assets/img1.jpg',
    role:'Front end developer',
    city:'Bangalore',
    online:true,
    skills:['HTML','CSS','JS','Rect']
  },
  {
    name:'Kanaga',
    profile:'src/assets/img2.jpg',
    role:' developer',
    city:'adirampattinam',
    online:false,
    skills:['HTML','CSS','JS','Rect','node js']
  },
  {
    name:'VIJI',
    profile:'src/assets/img1.jpg',
    role:'Front end developer',
    city:'Bangalore',
    online:true,
    skills:['HTML','CSS','JS','Rect']
  },
  {
    name:'VIJI',
    profile:'src/assets/img1.jpg',
    role:'Front end developer',
    city:'Bangalore',
    online:true,
    skills:['HTML','CSS','JS','Rect']
  },
 

]
  return (
    <>
    {userData.map((userd,index)=>(<Usercard 
    key={index} 
    name={userd.name} 
    city={userd.city} 
    role={userd.role} 
    online={userd.online} 
    profile={userd.profile} 
    skills={userd.skills} 
    /> ))}
    </>
  )
}

export default App
