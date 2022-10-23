import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

export function PicturesGrid() {
    return (
    <ul className={styles.moviesGrid}>
        {movies.map(function(movie){
            return <MovieCard key={movie.id} movie={movie}/>
        })}
    </ul>
    )
}