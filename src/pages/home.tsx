import MovieCard from "../components/MovieCard";

function home() {
  const movies = [
    { id: 1, title: "john wick",  release_date: "2020",url:"" },
    { id: 2, title: "john wick1", release_date: "2022",url:"" },
    { id: 3, title: "john wick2", release_date: "2023",url:"" },
    { id: 4, title: "john wick3", release_date: "2024",url:"" },
  ];

  return (
    <div className="home">
      <div className="moive-grid">
        {movies.map((movie) => (
          <MovieCard
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

export default home;
