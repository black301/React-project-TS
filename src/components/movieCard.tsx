interface movie{
    url:string;
    title:string;
    release_date:string;
}

function MovieCard({url,title,release_date}:movie) {
  
  function favClick(){
    console.log("i hate react")
  }
  
  
  return (
    <>
      <div className="moive-card">
        <div className="moive-poster">
          <img src={url} alt={title}></img>
          <div className="moive-overlay">
            <button onClick={favClick} className="favorite-btn">
              💀
            </button>
          </div>
        </div>
        <div className="moive info">
        <h3>{title}</h3>
        <p>{release_date}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
