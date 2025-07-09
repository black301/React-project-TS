export function GetPopularMovies(): Promise<Movie[]>;
export function SearchMovies(query: string): Promise<Movie[]>;
interface Movie {
  id: number;
  poster_path: string; // correct field name!
  title: string;
  release_date: string;
  // add more fields if needed
}
