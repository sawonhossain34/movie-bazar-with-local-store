import React from 'react';

const SingleCart = ({movie,handleWatchTime}) => {
    // console.log(props);
    const {movieName,poster,watchTime,imdbRating,description
    } = movie;
    return (
        <div>
            <div className="movie-card card text-center m-auto">
                    <div className="movie-poster w-25 m-auto">
                        <img className='w-75' src={poster} alt="" />
                    </div>
                    <h3>{movieName}</h3>
                    <p >{description}</p>
                    <div className="timeAndRating d-flex justify-content-around">
                        <p>Watch Time :{watchTime}</p>
                        <p>Rating :{imdbRating}</p>
                    </div>
                    <button onClick={() => {handleWatchTime(watchTime)}} className='btn btn-info w-75 m-auto'>Book Now</button>
                </div>
        </div>
    );
};

export default SingleCart;