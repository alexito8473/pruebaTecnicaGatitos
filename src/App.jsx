import { useState, useEffect } from 'react'
import { URL_FACTS_API, URL_IMAGE_GET_API, URL_IMAGE_SEE_API } from "./Constant.js"
import "./App.css"
export function App() {
    const [fact, setFact] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        fetch(URL_FACTS_API)
            .then(response => response.json())
            .then(data => setFact(data.fact))
    }, [])

    useEffect(() => {
        if (!fact) return
        const letter = fact.split(" ", 1)
        fetch(URL_IMAGE_GET_API.replace("{}", letter))
            .then(res => res.json())
            .then(result => setImage(URL_IMAGE_SEE_API.replace("{1}", result._id).replace("{2}", letter)))
    }, [fact])
    return (
        <main>
            <>
                <h1>Aplicación para la visalización de gatitos</h1>
                {fact && <p>{fact}</p>}
                {image && <img src={image} alt="Image" />
                }
            </>
        </main>)
}