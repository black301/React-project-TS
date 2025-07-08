import MovieCard from "../components/MovieCard";
import { useState} from "react";
function Home() {
    const [searchQuery,setSearchQuery] =useState("")
    const movies = [
        { id: 1, title: "john wick",  release_date: "2020",url:"" },
        { id: 2, title: "john wick1", release_date: "2022",url:"" },
        { id: 3, title: "john wick2", release_date: "2023",url:"" },
        { id: 4, title: "john wick3", release_date: "2024",url:"" },
    ];
    
    const handelSearch = (event:React.FormEvent<HTMLFormElement>)=>{
        console.log(searchQuery)
        event.preventDefault()
        setSearchQuery("")
    };
  return (
    <div className="home">
        <form onSubmit={handelSearch} className="search-form">
            <input onChange={(event)=>setSearchQuery(event.target.value)}
            value={searchQuery}
            className="search-input"
            type="text"
            placeholder="search for a movie"></input>

            <button className="search-button" type="submit">
                Search
            </button>
        </form>


      <div className="movie-grid">
        {movies.map((movie) => (
          movie.title.toLocaleLowerCase().startsWith(searchQuery) && <MovieCard
            url=""
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
