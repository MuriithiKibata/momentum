import React, { useEffect, useState } from 'react'
import useFetch from '@/Hooks/useFetch'
import { getToken } from '@/lib/getToken'
import { API_URL } from '@/constants'
function useCompleteTodoQuery() {
  const [ token, setToken ] = useState<string | null>(null)
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken()
      setToken(token)
    }
    fetchToken()
  })

  const { data, loading, fetchData, error } = useFetch({
    url: `${API_URL}/todos/complete`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
    manual: true,
  })

  const handleCompleteTodo = async (id: number | undefined) => {
    await fetchData({body: JSON.stringify({ todo_id: id })})

  }

  return { data, loading, handleCompleteTodo, error }
}

export default useCompleteTodoQuery