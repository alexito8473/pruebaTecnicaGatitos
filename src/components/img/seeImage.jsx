import { useObtainImageCat } from "../../hooks/useObtainImageCat.js"

export function SeeImage({fact = "pedrito juan"}) {
    const { image } = useObtainImageCat({ fact})
    return (<>
        {image && <img src={image} alt="Image" />}
    </>)
}