import { ref } from 'vue'

export function useFetch() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchData = async (url) => {
    loading.value = true
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const result = await response.json()
      console.log(result)
      data.value = result
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetchData
  }
}
