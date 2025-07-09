import { createContext,useState,useContext,useEffect, type ReactNode  } from "react";
import type { Movie } from "../Services/api";
import Favorites from "../pages/Favorites";

interface MovieContextType {
  favs: Movie[];
  AddToFavs: (movie: Movie) => void;
  rmfavs: (movieId: number) => void;
  isfav: (movieId: number) => boolean;
}


const MovieContext = createContext<MovieContextType | undefined>(undefined);



export const useMovieContext = ()=>useContext(MovieContext)

export const MovieProvider =({children}: { children: ReactNode })=>{
   const [favs,setfavs]= useState<Movie[]>([])
   useEffect (()=>{
    const storedFavs= localStorage.getItem("favorites");
    if(storedFavs) setfavs(JSON.parse(storedFavs))

   },[])
   
   
   useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favs))

   },[favs])

   const AddToFavs =(Movie:Movie)=>{
        setfavs(prev=>[...prev,Movie])
   }
   const rmfavs=(movieid:number)=>{
        setfavs(prev=>[...prev.filter(favy=>favy.id !== movieid)])
   }
   const isfav = (mv:number)=>{
    return favs.some(mc=>mc.id===mv)

   }
   const value:MovieContextType = {
        favs,
        AddToFavs,
        rmfavs,
        isfav
   }
   return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>


}