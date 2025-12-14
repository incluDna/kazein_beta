// import axios from 'axios'


// export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000/api'


// export async function fetchList(endpoint: string) {
// const url = `${API_BASE}/${endpoint}`
// const res = await axios.get(url)
// return res.data
// }
import axios from 'axios'

// ชี้แค่ base ของ backend
export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000'

export async function fetchList(endpoint: string) {
  const url = `${API_BASE}/api/${endpoint}`
  const res = await axios.get(url)
  return res.data
}
