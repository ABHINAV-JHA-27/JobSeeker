import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query, delay) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key":
                "0e04c6d01dmsh26cfc19f3c02b14p18bf4djsnab25cf585788",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    const fetchData = () => {
        setIsLoading(true);
        setTimeout(async () => {
            try {
                const response = await axios.request(options);
                setData(response.data.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }, delay);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
