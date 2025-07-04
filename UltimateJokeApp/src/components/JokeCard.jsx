import React from 'react'
import { Link } from 'react-router-dom';
function JokeCard({ id, content, categories }) {
    return (
        <Link to={`/Joke/${id}`} className="block transform hover:scale-[1.02] transition duration-200">
            <div className="bg-white shadow-lg rounded-xl p-6 mb-4 mt-4 border border-gray-200 hover:shadow-xl">
                <h3 className="text-xl font-bold text-gray-800  mb-3">Joke:</h3>
                <p className="text-gray-600 mb-4">{content}</p>
                {categories.length > 0 && (
                    <p className="text-sm text-gray-600"><strong className="font-medium">Category:</strong>{categories.join(",")}</p>
                )}
            </div>
        </Link>
    )
}
export default JokeCard