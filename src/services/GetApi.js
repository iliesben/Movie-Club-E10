import { getApiUrl } from './Api'
import { getData } from './GetData'

export const getCategory = () => {
  return getData(
    getApiUrl(
      `/genre/movie/list`,
      {
        language: 'fr-FR',
      }
    )
  )
}

export const getMoviebyCategory = (_genre, _page) => {
  return getData(
    getApiUrl(
      `/discover/movie`,
      {
        with_genres: _genre,
        language: 'fr-FR',
        page: _page
      }
    )
  )
}

export const getMovieDetail = (_id) => {
  return getData(
    getApiUrl(
      `/movie/${_id}`,
      {
        language: 'fr-FR'
      }
    )
  )
}

export const searchMovie = (_searchText, _page) => {
  return getData(
    getApiUrl(
      `/search/movie`,
      {
        query: _searchText,
        language: 'fr-FR',
        page: _page
      }
    )
  )
}

export const getMovieTrailer = (_id) => {
  return getData(
    getApiUrl(
      `/movie/${_id}/videos`,
      {}
    )
  )
}