"use client";

import { useState } from 'react';
export default function Home() {
  const[count, setCount] = useState(0)

  const handleClick = ()=> {
    setCount(count +1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className=''>Contador</h1>
        <p>Numero atual: {count}</p>
        <button onClick={handleClick} className='h-10 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>+</button>
      </div>
    </main>
  )
}
