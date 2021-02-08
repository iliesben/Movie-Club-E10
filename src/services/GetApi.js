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

export const getMoviebyCategory = (genre) => {
  return getData(
    getApiUrl(
      `/discover/movie`,
      {
        with_genres: genre,
        language: 'fr-FR',
      }
    )
  )
}

// export const getCategory = () => {
//   return fetch(getApiUrl(
//     '/genre/movie/list',
//     {
//       language: 'fr-FR',
//     }
//   )).then(
//     resultat => resultat.json()
//   )
// }