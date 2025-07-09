const API_KEY = "7a23c761cb72f47b646540268ca6ba60";
const BASE_URL ="https://api.themoviedb.org/3"; 



export const GetPopularMovies = async ()=> {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results;
}

export const SearchMovies = async (query)=> {
    const response = await fetch(`${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = response.json()
    return data.results;
}