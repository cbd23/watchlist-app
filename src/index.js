import './style.css'
import { buttons, popularElements, movieCardsContainers } from './DOM-elements.js'
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

// SEARCH URLs

// MULTI: search for movies, TV shows and people in a single request.
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

// MOVIE LISTS URLs:

// GET a list of movies ordered by popularity
const POPULAR_URL = BASE_URL + '/movie/popular?language=en-US&page=1'

// GET a list of movies that are currently in theatres
const NOW_PLAYING_URL = BASE_URL + '/movie/now_playing?language=en-US&page=1'

// GET a list of movies that are being released soon
const UPCOMING_URL = BASE_URL + '/movie/upcoming?language=en-US&page=1'

// GET a list of movies ordered by rating
const TOP_RATED_URL = BASE_URL + '/movie/top_rated?language=en-US&page=1'

// GET a list of actors playing in a movie
// const MOVIE_CREDITS_URL

// GET the poster image or the backdrop image for a MOVIE
const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

// create a fn that takes a genreId as an arg and returns the genre's name
// this uses the genreData arr from our 'genre-data.js' module
function findGenreNameById (genreId) {
  const genre = genreData.find(genre => genre.id === genreId)
  return genre ? genre.name : 'Unknown'
}

// GET the needed movies for the 'UPCOMING' section
async function getUpcomingMovies (url, options) {
  // create an arr that'll store movies
  const upcomingMoviesArr = []

  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()

      // push the movies that we'll display into an arr
      upcomingMoviesArr.push(data.results[8], data.results[9], data.results[10], data.results[11], data.results[12], data.results[13])

      console.log('Upcoming Movies Arr: ')
      console.log(upcomingMoviesArr)

      // create a 'movie-card' element for each movie object inside the arr
      upcomingMoviesArr.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.classList.add('movie-card')

        const cardPosterContainer = document.createElement('div')
        cardPosterContainer.classList.add('card-poster-container')

        const cardPoster = document.createElement('img')
        cardPoster.classList.add('card-poster')
        cardPoster.alt = 'movie-poster'
        cardPoster.width = '190'
        cardPoster.src = `${MOVIE_IMAGE_URL + movie.poster_path}`

        cardPosterContainer.appendChild(cardPoster)

        const cardTextContainer = document.createElement('div')
        cardTextContainer.classList.add('card-text-container')

        const ratingContainer = document.createElement('div')
        ratingContainer.classList.add('rating-container')
        ratingContainer.innerHTML = '<svg width="0.9rem" height="0.9rem" xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 24 24" fill="yellow" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>'

        const movieCardRating = document.createElement('span')
        movieCardRating.classList.add('movie-card-rating')
        movieCardRating.innerText = movie.vote_average.toFixed(1)

        const movieCardTitle = document.createElement('div')
        movieCardTitle.classList.add('movie-card-title')
        movieCardTitle.innerText = movie.title

        const addToWatchlistBtn = document.createElement('button')
        addToWatchlistBtn.classList.add('add-to-watchlist', 'card-btn')
        addToWatchlistBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>Watchlist'

        const trailerBtn = document.createElement('button')
        trailerBtn.classList.add('trailer-btn', 'card-btn')
        trailerBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg>Trailer'

        // append the elements
        ratingContainer.appendChild(movieCardRating)

        cardTextContainer.appendChild(ratingContainer)
        cardTextContainer.appendChild(movieCardTitle)
        cardTextContainer.appendChild(addToWatchlistBtn)
        cardTextContainer.appendChild(trailerBtn)

        movieCard.appendChild(cardPosterContainer)
        movieCard.appendChild(cardTextContainer)

        movieCardsContainers.upcomingMovieCardsContainer.appendChild(movieCard)
      })
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

getUpcomingMovies(UPCOMING_URL, OPTIONS)

// GET the needed movies for the 'IN THEATRES' section
async function getNowPlayingMovies (url, options) {
  // create an arr that'll store movies
  const inTheatresMoviesArr = []

  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()

      // push the movies that we'll display into an arr
      inTheatresMoviesArr.push(data.results[4], data.results[5], data.results[6], data.results[7], data.results[8], data.results[9])

      console.log('In theatres Movies Arr: ')
      console.log(inTheatresMoviesArr)

      // create a 'movie-card' element for each movie object inside the arr
      inTheatresMoviesArr.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.classList.add('movie-card')

        const cardPosterContainer = document.createElement('div')
        cardPosterContainer.classList.add('card-poster-container')

        const cardPoster = document.createElement('img')
        cardPoster.classList.add('card-poster')
        cardPoster.alt = 'movie-poster'
        cardPoster.width = '190'
        cardPoster.src = `${MOVIE_IMAGE_URL + movie.poster_path}`

        cardPosterContainer.appendChild(cardPoster)

        const cardTextContainer = document.createElement('div')
        cardTextContainer.classList.add('card-text-container')

        const ratingContainer = document.createElement('div')
        ratingContainer.classList.add('rating-container')
        ratingContainer.innerHTML = '<svg width="0.9rem" height="0.9rem" xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 24 24" fill="yellow" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>'

        const movieCardRating = document.createElement('span')
        movieCardRating.classList.add('movie-card-rating')
        movieCardRating.innerText = movie.vote_average.toFixed(1)

        const movieCardTitle = document.createElement('div')
        movieCardTitle.classList.add('movie-card-title')
        movieCardTitle.innerText = movie.title

        const addToWatchlistBtn = document.createElement('button')
        addToWatchlistBtn.classList.add('add-to-watchlist', 'card-btn')
        addToWatchlistBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>Watchlist'

        const trailerBtn = document.createElement('button')
        trailerBtn.classList.add('trailer-btn', 'card-btn')
        trailerBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg>Trailer'

        // append the elements
        ratingContainer.appendChild(movieCardRating)

        cardTextContainer.appendChild(ratingContainer)
        cardTextContainer.appendChild(movieCardTitle)
        cardTextContainer.appendChild(addToWatchlistBtn)
        cardTextContainer.appendChild(trailerBtn)

        movieCard.appendChild(cardPosterContainer)
        movieCard.appendChild(cardTextContainer)

        movieCardsContainers.inTheatresMovieCardsContainer.appendChild(movieCard)
      })
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

getNowPlayingMovies(NOW_PLAYING_URL, OPTIONS)

// GET the needed movies for the 'POPULAR' section
async function getPopularMovies (url, options) {
  // create an arr that'll store the movies
  const popularMoviesArr = []

  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()

      // push the popular movies that we'll display into an arr
      popularMoviesArr.push(data.results[0], data.results[1], data.results[2], data.results[3])

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

// GET the needed movies for the 'TOP RATED' section
async function getTopRated (url, options) {
  // create an arr that'll store the movies
  const topRatedMoviesArr = []

  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()

      // push the movies that we'll display into an arr
      topRatedMoviesArr.push(data.results[0], data.results[1], data.results[2], data.results[8], data.results[14], data.results[9])

      console.log('Top Rated Movies Arr: ')
      console.log(topRatedMoviesArr)

      // create a 'movie-card' element for each movie object inside the arr
      topRatedMoviesArr.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.classList.add('movie-card')

        const cardPosterContainer = document.createElement('div')
        cardPosterContainer.classList.add('card-poster-container')

        const cardPoster = document.createElement('img')
        cardPoster.classList.add('card-poster')
        cardPoster.alt = 'movie-poster'
        cardPoster.width = '190'
        cardPoster.src = `${MOVIE_IMAGE_URL + movie.poster_path}`

        cardPosterContainer.appendChild(cardPoster)

        const cardTextContainer = document.createElement('div')
        cardTextContainer.classList.add('card-text-container')

        const ratingContainer = document.createElement('div')
        ratingContainer.classList.add('rating-container')
        ratingContainer.innerHTML = '<svg width="0.9rem" height="0.9rem" xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 24 24" fill="yellow" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>'

        const movieCardRating = document.createElement('span')
        movieCardRating.classList.add('movie-card-rating')
        movieCardRating.innerText = movie.vote_average.toFixed(1)

        const movieCardTitle = document.createElement('div')
        movieCardTitle.classList.add('movie-card-title')
        movieCardTitle.innerText = movie.title

        const addToWatchlistBtn = document.createElement('button')
        addToWatchlistBtn.classList.add('add-to-watchlist', 'card-btn')
        addToWatchlistBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>Watchlist'

        const trailerBtn = document.createElement('button')
        trailerBtn.classList.add('trailer-btn', 'card-btn')
        trailerBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg>Trailer'

        // append the elements
        ratingContainer.appendChild(movieCardRating)

        cardTextContainer.appendChild(ratingContainer)
        cardTextContainer.appendChild(movieCardTitle)
        cardTextContainer.appendChild(addToWatchlistBtn)
        cardTextContainer.appendChild(trailerBtn)

        movieCard.appendChild(cardPosterContainer)
        movieCard.appendChild(cardTextContainer)

        movieCardsContainers.topRatedMovieCardsContainer.appendChild(movieCard)
      })
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

getTopRated(TOP_RATED_URL, OPTIONS)

// GET 'MOVIE CREDITS'
// async function getMovieCredits (id, options) {
//   try {
//     const response = await fetch(BASE_URL + `/movie/${id}/credits`, options)

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

// getMovieCredits(787699, OPTIONS)

// GET the TRAILER for a movie using movie_id
async function getMovieTrailer (url, options) {
  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()

      console.log('MOVIE TRAILER TEST: ')
      console.log(data)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// movie_id for 'No Way Up' - for testing purposes
const movie_id = 1096197
const MOVIE_TRAILER_URL = BASE_URL + `/movie/${movie_id}/videos?language=en-US`

getMovieTrailer(MOVIE_TRAILER_URL, OPTIONS)

// key received in object --- UJa1zUYegqo

// valid YouTube link using the key: https://www.youtube.com/watch?v=UJa1zUYegqo

// this will be opened with taget = "_blank" on an <a> element that has href ="https://www.youtube.com/watch?v=UJa1zUYegqo"
