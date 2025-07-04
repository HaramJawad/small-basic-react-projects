import React, { useState, useEffect } from 'react'
import { Container, JokeCard } from "../components"
function AllJokes() {
  const [allJokes, setAllJokes] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log("json", json)
        setAllJokes(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // The empty array ensures the effect runs only once on mount

  return (
    <div>
      <Container>
        {loading && <p>loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <h2 className="text-3xl font-bold text-gray-800 mb-6  text-center">😂 Ultimate Joke Collection</h2>
        {allJokes && allJokes.data && (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allJokes.data.data.map((joke) => (
          <JokeCard key={joke.id} id={joke.id} content={joke.content} categories={joke.categories} />
        ))}
        </div>
        )}
      </Container>
    </div>
  )
}

export default AllJokes