const Movie = ({ movie }) => {
    return (

        <div className="movie" >
            <div>
                <p>
                    {movie.Year}
                </p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://picsum.photos/400/600'} alt={movie.Title} />
            </div>
            <div className="movie__info">
                {movie.Type}
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default Movie;