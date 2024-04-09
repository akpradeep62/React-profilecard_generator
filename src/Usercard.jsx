import React from 'react'


export const Usercard = (props) => {
  return (
    <>
       <div className='card-container'>
        <span className={props.online?'pro online':'pro offline'}>{props.online?'Online':'Offline'}</span> 
        <img src={props.profile} alt="profile" className='img' />
        <h3>{props.name}</h3>   
        <h3>{props.city}</h3>
        <p>{props.role}</p>
        <div className='buttons'>
            <button className='primary'>Messaage</button>
            <button className='primary outline'>Follow</button>
        </div>
        <div className='skills'>
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
            </ul>
        </div>
    </div>
      </>
  )
};

