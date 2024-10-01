import { URL_IMAGE_GET_API, URL_IMAGE_SEE_API } from "../Constant.js"
import { useState, useEffect } from 'react'

export function useObtainImageCat({ fact }) {
    const [image, setImage] = useState()
    useEffect(() => {
        if (!fact) return
        const letter = fact.split(" ", 1)
        fetch(URL_IMAGE_GET_API.replace("{}", letter))
            .then(res => res.json())
            .then(result => setImage(URL_IMAGE_SEE_API.replace("{1}", result._id).replace("{2}", letter)))
    }, [fact])
    return { image };
}