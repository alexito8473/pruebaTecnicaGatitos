
import { useObtainImageCat } from "./hooks/useObtainImageCat.js"
import { useCatFact } from "./hooks/userCatFat.js"
import { SeeImage } from "./components/img/seeImage.jsx"
import "./App.css"

export function App() {
    const { fact, refreshRandomFact } = useCatFact()
    const handleClick = refreshRandomFact
    return (
        <main>
            <>
                <h1>Aplicación para la visalización de gatitos</h1>
                <button onClick={handleClick} >Reset</button>
                {fact && <p>{fact}</p>}
                <SeeImage fact={fact}></SeeImage>
                <SeeImage fact="Juan de dios"></SeeImage>
                <SeeImage fact="Pedrito"></SeeImage>
            </>
        </main>)
}