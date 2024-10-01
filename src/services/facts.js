import { URL_FACTS_API } from "../Constant.js"
export const getFact = async () => {
    const response = await fetch(URL_FACTS_API)
    const json = await response.json()
    console.log(json)
    return json.fact
}