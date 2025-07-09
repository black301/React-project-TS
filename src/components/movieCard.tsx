import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import type { Movie } from "../Services/api";

function MovieCard({id, poster_path, title, release_date }: Movie) {
  const { isfav, AddToFavs, rmfavs } = useMovieContext();
  const fav = isfav(id)
    
  function favClick(e:any) {
    e.preventDefault()
    if(fav)rmfavs(id)
      else AddToFavs({id, poster_path, title, release_date })
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        ></img>
        <div className="movie-overlay">
          <button onClick={favClick} className={`favorite-btn ${fav?"active":""}`}>
          ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
