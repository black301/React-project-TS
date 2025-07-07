
interface moive{
    url:string;
    title:string;
    relase_date:string;
}

function movieCard({url,title,relase_date}:moive) {
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
        <p>{relase_date}</p>
        </div>
      </div>
    </>
  );
}

export default movieCard;
