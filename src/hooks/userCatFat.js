import { useState, useEffect } from 'react'
import { getFact } from '../services/facts'
export function useCatFact() {
    const [fact, setFact] = useState()
    const refreshRandomFact = () => { getFact().then(setFact) }
    useEffect(refreshRandomFact, [])
    return { fact, refreshRandomFact }
}