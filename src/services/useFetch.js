import { useState, useEffect } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await fetch(baseUrl + url);
                if (resp.ok) {
                    const jsonData = await resp.json();
                    setData(jsonData);
                } else {
                    throw resp;
                }
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [url])

    return { data, loading, error }
}
