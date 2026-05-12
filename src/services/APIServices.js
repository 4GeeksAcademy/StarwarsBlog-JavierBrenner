const URLAPI = "https://thesimpsonsapi.com/api/"


export const getCharacters = async () => {
   try { const res = await fetch (`${URLAPI}characters`)

    const data = await res.json()
    return data.results
} catch (err) {
    console.log('Error to get caracters', err);
    
}

}

export const getLocations = async () => {
   try { const res = await fetch (`${URLAPI}locations`)

    const data = await res.json()
    return data.results
} catch (err) {
    console.log('Error to get locations', err);
    
}

}
