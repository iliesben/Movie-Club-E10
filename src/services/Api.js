import { API_KEY, API_URL } from "../constants/ApiConstants";

const getQueryString = (queryParams) => {
  let queryString;

  if (typeof queryParams === 'object') {

    queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  }

  if (queryString) return `?${queryString}`

  return ''
}


const getUrl = (path, queryParams) => `${path}${getQueryString(queryParams)}`

export const getApiUrl = (path, queryParams = {}) => getUrl(`${API_URL}${path}`, { ...queryParams, api_key: API_KEY })
