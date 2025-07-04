import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="text-3xl text-purple-600 font-bold mb-4">Welcome to Home Page</h1>
        <p 
        className="text-gray-400 text-lg max-w-md text-center"> This is a sample page using react router and tailwindcss.Practice makes perfect!
        </p>
    </div>
  )
}