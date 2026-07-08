import useFetch from "@/Hooks/useFetch";
import { POST_FETCH_OPTIONS } from "@/option";
import { API_URL } from "@/constants";
import { getToken } from "@/lib/getToken";
import { useEffect } from "react";
import { useState } from "react";

interface Task {
  name: string;
  description: string;
  category: number | string;
  date: string;
  priority: string;
}

const useNewTaskQuery = () => {
    const [token, setToken ] = useState<string | null>(null);
    useEffect(() => {
        const fetchToken = async () => {
            const token = await getToken();
            setToken(token);
        };
        fetchToken();
        
    }, [])
   
    const { data, loading, fetchData, error } = useFetch({
        url: `${API_URL}/todos`,
        options: {
            ...POST_FETCH_OPTIONS,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
        manual: true,
    });

     const handlePostTask = async (taskData: Task) => {
        const response = await fetchData({
            body: JSON.stringify(taskData),
        })
        if (response) {
            console.log("Task posted successfully:", response);
        } else {
            console.error("Failed to post task:", error);
        }
     };

    return { data, loading, handlePostTask };
};

export default useNewTaskQuery;