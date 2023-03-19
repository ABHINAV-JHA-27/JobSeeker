import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endPoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
            "X-RapidAPI-Key":
                "0e04c6d01dmsh26cfc19f3c02b14p18bf4djsnab25cf585788",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    const FetchData = () => {
        setIsLoading(true);
        try {
            axios.request(options).then((response) => {
                setData(response.data.data);
                setIsLoading(false);
            });
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        FetchData();
    }, []);

    const reFetch = () => {
        setIsLoading(true);
        FetchData();
    };

    return { data, isLoading, error, reFetch };
};

export default useFetch;
