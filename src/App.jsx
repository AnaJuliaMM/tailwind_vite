import React, { useState } from 'react'


function App() {
  const [value, setValue] = useState(false)

  function add() {
    setValue(!value)
    console.log(value)
  }

  function minus() {
    setValue(value)
  }

  return (
    <div className={`h-screen w-screen bg-slate-200 flex flex-col items-center gap-3`}>
      <h1 className={` hover:text-blue-700 cursor-pointer transition-all duration-[3000ms] mt-10 animate-pulse font-bold text-5xs`}>Hello World!</h1>
      <div className='flex justify-center items-center gap-4' >
        <button className="bg-slate-300 p-1 rounded w-10 text-2xl flex justify-center items-center" onClick={add}> + </button>
        <h1 className={`${value? "text-green-400" : 'text-myred'} font-bold`}>{value ? 'Ativo' : 'Inativo'}</h1>
        <button className="bg-slate-300 p-1 rounded w-10 text-2xl flex justify-center items-center" onClick={minus}> - </button>
      </div>
    </div>

  )
}

export default App
