import { API_KEY, API_URL } from "../constants/ApiConstants";

const getQueryString = (_queryParams) => {
  let queryString;

  if (typeof _queryParams === 'object') {

    queryString = Object.entries(_queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  }

  return (queryString) ? `?${queryString}` : ''
}


const getUrl = (_path, _queryParams) => `${_path}${getQueryString(_queryParams)}`

export const getApiUrl = (_path, _queryParams = {}) => getUrl(`${API_URL}${_path}`, { ..._queryParams, api_key: API_KEY })
