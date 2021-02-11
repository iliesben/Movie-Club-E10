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

export const getMoviebyCategory = (genre, page) => {
  return getData(
    getApiUrl(
      `/discover/movie`,
      {
        with_genres: genre,
        language: 'fr-FR',
        page: page
      }
    )
  )
}

export const getMovieDetail = (id) => {
  return getData(
    getApiUrl(
      `/movie/${id}`,
      {
          language: 'fr-FR'
      }
    )
  )
}

export const searchMovie = (searchText, page) => {
  return getData(
    getApiUrl(
      `/search/movie`,
      {
        query: searchText,
        language: 'fr-FR',
        page: page
      }
    )
  )
}