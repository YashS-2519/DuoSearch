import { useEffect, useState } from "react";

function useSearchResult(query, location = "India", engine = "google") {

    const [data, setData] = useState({});

    const url = `/search?q=${query}&location=${location}&api_key=${import.meta.env.VITE_SERPAPI_API}&engine=${engine}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res))
    }, [query, location, engine])
    return data;
}

export default useSearchResult;