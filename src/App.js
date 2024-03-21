import React from "react";
import { useEffect,useState } from "react";
import MovieCard from "./MovieCard";

import './App.css';

//  413e5983 api key 

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=413e5983';

const movie1={
    "Title": "Spiderman and Grandma",
    "Year": "2009",
    "imdbID": "tt1433184",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
};




const App=()=>{

    const[movies,SetMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');





const SearchMovies=async(title)=>{
 const response=await fetch(`${API_URL}&s=${title}`);
 const data= await response.json();

 SetMovies(data.Search);

}

useEffect(()=>{
 SearchMovies(`Spiderman`)
},[]);




return (
<>
<div className="app">

    <h1>MovieLand</h1>


<div className="search">
   <input
    placeholder="Search for Movies"
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}

    />
    <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
    alt="search"
    onClick={() => SearchMovies(searchTerm)}
    />
</div>

{

movies.length>0
? (
<div className="container">

{movies.map((movie)=>(
<MovieCard movie={movie}/>

))}

</div>
):
(

<div className="empty">

<h2>No Movies Found</h2>


</div>



)
}

</div>



</>
);


}

export default App;