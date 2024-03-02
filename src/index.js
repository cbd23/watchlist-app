import './style.css'
import { buttons, popularElements } from './DOM-elements.js'
import { genreData } from './genre-data.js'
import { API_KEY } from './cred'

// store the base url, that'll be used in every request
const BASE_URL = 'https://api.themoviedb.org/3'

// we'll pass this object as a second argument everytime we make a request using 'GET'
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjk1ZGI3Zjc2M2FjMjA0NzBiZTdiYWI5N2QxYzY5ZiIsInN1YiI6IjY1YzNhNmI0OGMwYTQ4MDE2NDg1YWUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTWg4CfQZHMbgjAz5Znn5-5daI5seOIaaiVfi5B7qXk'
  }
}

// SEARCH ##################################################################################################################

// explain
const SEARCH_MULTI_URL = BASE_URL + '/search/multi?'

// default SEARCH term
const SEARCH_TERM = 'Allied'

async function getMovie (url) {
  try {
    const response = await fetch(url)

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// getMovie(`${SEARCH_MULTI_URL}query=${SEARCH_TERM}&api_key=${API_KEY}`)

// MOVIE LISTS ##################################################################################################################

// Get a list of movies that are being released soon
const UPCOMING_URL = BASE_URL + '/movie/upcoming?language=en-US&page=1'

// Get a list of movies that are currently in theatres
const NOW_PLAYING_URL = BASE_URL + '/movie/now_playing?language=en-US&page=1'

// Get a list of movies ordered by popularity
const POPULAR_URL = BASE_URL + '/movie/popular?language=en-US&page=1'

// Get a list of movies ordered by rating
const TOP_RATED_URL = BASE_URL + '/movie/top_rated?language=en-US&page=1'

// Get a list of actors playing in a movie
// const MOVIE_CREDITS_URL

// Get the poster image or the backdrop image for a MOVIE
const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

// GET 'UPCOMING'

async function getUpcomingMovies (url, options) {
  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// getUpcomingMovies(UPCOMING_URL, OPTIONS)

// GET 'NOW PLAYING'

async function getNowPlayingMovies (url, options) {
  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

getNowPlayingMovies(NOW_PLAYING_URL, OPTIONS)

// GET 'POPULAR'

async function getPopularMovies (url, options) {
  // create an arr that'll store the most popular four movies that will be displayed in the POPULAR section
  const popularMoviesArr = []

  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()

      // push the popular movies that we'll display into an arr
      popularMoviesArr.push(data.results[0], data.results[1], data.results[2], data.results[3])

      // log the arr to check that everything works
      console.log('Popular Movies Arr: ')
      console.log(popularMoviesArr)

      // update info about THE MOST POPULAR movie
      popularElements.mainPoster.src = MOVIE_IMAGE_URL + popularMoviesArr[0].poster_path
      popularElements.mainImage.src = MOVIE_IMAGE_URL + popularMoviesArr[0].backdrop_path
      popularElements.mainTitle.innerText = popularMoviesArr[0].title
      popularElements.mainOverview.innerText = popularMoviesArr[0].overview

      // store genre_ids for main movie in an arr
      let mainMovieGenresArr = []
      mainMovieGenresArr = popularMoviesArr[0].genre_ids

      // display each genre inside mainGenres element
      mainMovieGenresArr.forEach(genreId => {
        const genreName = findGenreNameById(genreId)
        const mainMovieGenre = document.createElement('div')
        mainMovieGenre.innerText = genreName
        mainMovieGenre.classList.add('main-movie-genre')
        popularElements.mainGenres.appendChild(mainMovieGenre)
      })

      // repeat for the SECOND MOST POPULAR movie
      popularElements.secondPopPoster.src = MOVIE_IMAGE_URL + popularMoviesArr[1].poster_path
      popularElements.popTwoTitle.innerText = popularMoviesArr[1].title

      let secondPopMovieGenresArr = []
      secondPopMovieGenresArr = popularMoviesArr[1].genre_ids

      secondPopMovieGenresArr.forEach((genreId, index) => {
        const genreName = findGenreNameById(genreId)
        const popTwoMovieGenre = document.createElement('span')
        popTwoMovieGenre.innerText = genreName

        // add a '/' between each genre name, but not before the 1st one or after the last one
        if (index !== secondPopMovieGenresArr.length - 1) {
          popTwoMovieGenre.innerText += ' / '
        }

        popularElements.popTwoGenres.appendChild(popTwoMovieGenre)
      })

      // repeat for the THIRD MOST POPULAR movie
      popularElements.thirdPopPoster.src = MOVIE_IMAGE_URL + popularMoviesArr[2].poster_path
      popularElements.popThreeTitle.innerText = popularMoviesArr[2].title

      let thirdPopMovieGenresArr = []
      thirdPopMovieGenresArr = popularMoviesArr[2].genre_ids

      thirdPopMovieGenresArr.forEach((genreId, index) => {
        const genreName = findGenreNameById(genreId)
        const popThreeMovieGenre = document.createElement('span')
        popThreeMovieGenre.innerText = genreName

        if (index !== thirdPopMovieGenresArr.length - 1) {
          popThreeMovieGenre.innerText += ' / '
        }

        popularElements.popThreeGenres.appendChild(popThreeMovieGenre)
      })

      // repeat for the FOURTH MOST POPULAR movie
      popularElements.fourthPopPoster.src = MOVIE_IMAGE_URL + popularMoviesArr[3].poster_path
      popularElements.popFourTitle.innerText = popularMoviesArr[3].title

      let fourthPopMovieGenresArr = []
      fourthPopMovieGenresArr = popularMoviesArr[3].genre_ids

      fourthPopMovieGenresArr.forEach((genreId, index) => {
        const genreName = findGenreNameById(genreId)
        const popFourMovieGenre = document.createElement('span')
        popFourMovieGenre.innerText = genreName

        if (index !== fourthPopMovieGenresArr.length - 1) {
          popFourMovieGenre.innerText += ' / '
        }

        popularElements.popFourGenres.appendChild(popFourMovieGenre)
      })
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

getPopularMovies(POPULAR_URL, OPTIONS)

// GET 'TOP RATED'

async function getTopRated (url, options) {
  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// getTopRated(TOP_RATED_URL, OPTIONS)

// GET 'MOVIE CREDITS'

async function getMovieCredits (id, options) {
  try {
    const response = await fetch(BASE_URL + `/movie/${id}/credits`, options)

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// getMovieCredits(787699, OPTIONS)

// GET 'MOVIE IMAGE'

// async function getMovieImage (url, options) {
//   try {
//     const response = await fetch(url, options)

//     if (response.status === 200) {
//       const data = await response.json()
//       console.log(data)
//     } else {
//       console.log('There was a problem with the request.')
//     }
//   } catch (error) {
//     console.log('Error: ', error)
//   }
// }

// getMovieImage(MOVIE_CREDITS_URL, OPTIONS)

// create a fn that takes a genreId as an arg and returns the genre's name
// this uses the genreData arr from our 'genre-data.js' module
function findGenreNameById (genreId) {
  const genre = genreData.find(genre => genre.id === genreId)
  return genre ? genre.name : 'Unknown'
}
