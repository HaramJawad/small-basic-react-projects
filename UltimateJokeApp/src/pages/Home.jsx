import React, { useState } from 'react'
import { Container } from "../components"
function Home() {
  const [randomJoke, setRandomJoke] = useState({});
  async function fetchRandomJoke() {
    const apiUrl = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("data", data)
      setRandomJoke(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100   py-16">
      <Container>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-[1.01] transition duration-300 ">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300" onClick={fetchRandomJoke}>Get a random joke</button>
          {randomJoke && <p className="mt-8 text-xl font-medium text-gray-800 leading-relaxed">{randomJoke.data?.content}</p>}
        </div>
      </Container >
    </div >
  )
}

export default Home