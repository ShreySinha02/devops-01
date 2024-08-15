import React, { useEffect, useState } from 'react'

function App() {
  const [data,setData]=useState<String>()

  const BASE_URL=process.env.REACT_APP_API_URL
  console.log(`${BASE_URL}/users`)
  useEffect(()=>{
    fetch(`${BASE_URL}/users`)
    .then((res)=>{
     return res.json()
    })
    .then((data)=>{
        setData(data.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  })
  return (
    <div className=' w-screen h-screen bg-slate-800 text-3xl text-center text-white'>
      <h1 className=' pt-16'>App </h1>
      <h3 className=' pt-16'>{data??"not connected"}</h3>
    
    </div>
  )
}

export default App;