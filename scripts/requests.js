const newPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () => {
    //insert your token in the request url below (find token at https://ipinfo.io)
    const response = await fetch('//ipinfo.io/json?token=xxxxxxxxxx')

    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}
