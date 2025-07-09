import "../css/MovieCard.css";
import type  {Movie}  from "../Services/api";



function MovieCard({ poster_path, title, release_date }: Movie) {
  function favClick() {
    console.log("i hate react");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}></img>
        <div className="movie-overlay">
          <button onClick={favClick} className="favorite-btn">
            💀
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
