import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
import type { Movie } from '../Services/api';
function Favorites() {
  const {favs}=useMovieContext();
  if(favs.length!=0){
    return(
      <div className="movies-grid">
          {favs?.map((movie: Movie) => (
            <MovieCard
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              key={movie.id}
              release_date={movie.release_date}
            />
          ))}
        </div>
    )
  }else{
    return (
      <div className="favorites-empty">
        <h2>Empty</h2>
        <p>start adding movies to you favorites</p>
      </div>
    );
  }
}

export default Favorites;
