import React from 'react'
import { useState, useEffect } from 'react';
import { Container } from "../components"
import { Link, useNavigate, useParams } from 'react-router-dom'
function Joke() {
  const [Joke, setJoke] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const res = await fetch(`https://api.freeapi.app/api/v1/public/randomjokes/${id}`);
        const data = await res.json();
        if (data.success) {
          setJoke(data.data);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error("Error fetching joke:", error);
        navigate('/');
      }
    };

    if (id) fetchJoke();
    else navigate('/');
  }, [id, navigate]);

  return Joke ? (
    <div className="bg-gray-100  min-h-screen py-10">
      <Container>
        <div className="bg-white  max-w-2xl mx-auto rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-bold    text-gray-800 mb-4">Joke Detail</h2>
          <p className="text-gray-700 text-lg mb-3">{Joke.content}</p>
          {Joke.categories.length > 0 && (
            <p className="text-sm text-gray-600"><strong className="font-semibold text-gray-800" >Category:</strong>{Joke.categories.join('.')}</p>
          )}
        </div>
      </Container>
    </div>
  ) : null;
}

export default Joke