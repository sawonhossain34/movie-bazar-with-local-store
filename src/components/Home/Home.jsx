import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Home = () => {
const [movies , setMovies] = useState([]);


useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setMovies(data))
} ,[]);
console.log(movies);
    return (
        <div>
            <div className="movie-container row">
                {
                    movies.map(movie => <SingleCart movie={movie}></SingleCart>)
                }
            </div>
        </div>
    );
};

export default Home;