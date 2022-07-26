import { apiKey, apiUrl } from "./settings";
const fromApirResponseToGif = responseApi => {
    const { data = [] } = responseApi;

    return data;
}

export default function getTredingTerms() {
    const apiURL = `${apiUrl}/trending/searches?api_key=${apiKey}&limit=10&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApirResponseToGif)
}