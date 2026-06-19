import React, {useState, useEffect, useCallback} from 'react'

interface FetchProps {
    url: string;
    retries?: number;
    retryDelay?: number;
    options?: RequestInit;
    manual: boolean
}


interface ApiError  {
    error: string;
    reason?: string
}
function useFetch({url, retries = 3, retryDelay = 1000, options = {}, manual}: FetchProps) {

    const [data, setData] = useState<any>(null)
    const [ error , setError] = useState<ApiError | null>(null)
    const [loading, setLoading] = useState<boolean>(!manual)

    const fetchData = useCallback( async (params?: RequestInit) => {
        const controller = new AbortController()
        const { signal } = controller
        setLoading(true)
        setError(null)
        
        try {
          const response = await fetch(url, {...options, ...params, signal})

          let data = await response.json()

            if (!response.ok) {
            setError({
                error: data.error,
                reason: data.reason
            })
            return
          }   

          setData(data)
          return data

        } catch(error: any) {

            if (error.name === 'AbortError') {
                return
            }

            setError({
                error: error.message
            })
            return null
           
        } finally {
            setLoading(false)
        }
    }, [url, options])

    useEffect(() => {
        if (!manual) {
            fetchData()
        }
    
    }, [fetchData])

    return {fetchData, data, error, loading}
}

export default useFetch