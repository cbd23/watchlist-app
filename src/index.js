import './style.css'
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
const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/' + 'zVMyvNowgbsBAL6O6esWfRpAcOb.jpg'

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

async function getMovieImage (url, options) {
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

// getMovieImage(MOVIE_CREDITS_URL, OPTIONS)

// GENRES ##################################################################################################################

// const MOVIE_GENRES_URL = BASE_URL + '/genre/movie/list?language=en'

// async function getMovieGenres (url, options) {
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

// getMovieGenres(MOVIE_GENRES_URL, OPTIONS)

// store all the genres and their corresponding id, so we can map them later
const genreData = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
]

// BUTTONS:

const homeBtn = document.querySelector('logo-container')
const menuBtn = document.querySelector('.menu-container')
const searchFilterBtn = document.querySelector('.search-filter-container')
const searchBarBtn = document.getElementById('searchbar')
const searchIconBtn = document.querySelector('.search-icon-container')
