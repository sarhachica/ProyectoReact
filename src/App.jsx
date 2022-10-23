import { PicturesGrid } from "./PicturesGrid";
import styles from "./App.module.css";

export function App() {
    return (
    <div>
        <header>
            {<h1 className ={styles.title}>
                Películas Favoritas
            </h1>}
        </header>
        <main>
            <PicturesGrid/>
        </main>

    </div>
    );
}