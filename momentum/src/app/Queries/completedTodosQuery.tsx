import { API_URL } from "@/constants";
import useFetch from "@/Hooks/useFetch";
import { getToken } from "@/lib/getToken";
import { useEffect, useState } from "react";


export default function useCompletedTodos() {
    const [ token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getToken();
            setToken(token);
        };
        fetchToken();
    }, []);


    const { data, loading, fetchData } = useFetch({
        url: `${API_URL}/todos/completed`,
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        },
        manual: false,
    });


    useEffect(() => {
        const getData = async () => {
          await fetchData();
        };
        getData();
    }, []);

    return { data, loading};
}