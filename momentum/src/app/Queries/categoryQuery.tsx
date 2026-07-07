import { API_URL } from "@/constants";
import useFetch from "@/Hooks/useFetch";
import { GET_FETCH_OPTIONS } from "@/option";
import { useState, useEffect, use } from "react";
import { getToken } from "@/lib/getToken";
export default function useGetCategory() {

    const [ token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getToken();
            setToken(token);
        };
        fetchToken();
    }, [])



    const { data, loading, fetchData } = useFetch({
        url: `${API_URL}/categories`,
        options: {
            ...GET_FETCH_OPTIONS,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },
        manual: false,
    })


    useEffect(() => {
        const getData = async () => {
            const data = await fetchData()

            if (data !== null) {
                return data
            } else return []
        }
        getData()
    }, [])
    return { data, loading}
}