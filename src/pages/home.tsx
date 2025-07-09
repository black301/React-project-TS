import MovieCard from "../components/MovieCard";
import { useState,useEffect } from "react";
import { SearchMovies, GetPopularMovies, type Movie } from "../Services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies,SetMovies] = useState<Movie[]>([])
  const [Error,SetError] = useState<string>("")
  const [loading,Setloading] = useState(true)
  useEffect(()=>{
    const LoadPopularMovies = async ()=>{
      try{
        const PopularMovies = await GetPopularMovies();
        SetMovies(PopularMovies)
      }catch(err){
        console.log(err)
        SetError("faild to load movies...");
      }
      finally{
        Setloading(false);
      }
    }
    LoadPopularMovies()
  },[])

  const handelSearch = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(searchQuery);
    event.preventDefault();
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handelSearch} className="search-form">
        <input
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
          className="search-input"
          type="text"
          placeholder="search for a movie"
        ></input>

        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies?.map((movie:Movie) => (
          <MovieCard
            id= {movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            key={movie.id}  
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
