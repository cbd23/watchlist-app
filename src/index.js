import './style.css'
import { buttons, popularElements, movieCardsContainers, trendingPeopleCardsContainer, bodyChildren } from './DOM-elements.js'
import { genreData } from './genre-data.js'
// import { API_KEY } from './cred'

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

// create a variable that will store the SELECTED search type
let searchType

// create a fn that will modify the value of searchType - this fn is invoked when a search filter is selected
function decideSearchType (type) {
  searchType = type
  console.log('selected search filter: ' + searchType)
  return searchType
}

buttons.allFilterBtn.addEventListener('pointerdown', () => {
  decideSearchType('all')
})

buttons.moviesFilterBtn.addEventListener('pointerdown', () => {
  decideSearchType('movies')
})

buttons.celebsFilterBtn.addEventListener('pointerdown', () => {
  decideSearchType('celebs')
})

buttons.keywordsFilterBtn.addEventListener('pointerdown', () => {
  // 'Keywords' filter doesn't return much, so there's nothig worth displaying out there, just IDs and names
  // for this reason, we won't drop this filter option for UI purposes, instead we'll make it behave just like 'All' filter
  decideSearchType('all')
})

// create a fn that will run when the user presses 'Enter' or clicks on the 'search' icon
function handleSearch () {
  const searchTerm = buttons.searchBar.value.trim()

  // SEARCH URLs

  // MULTI: search for movies, TV shows and people in a single request
  const SEARCH_MULTI_URL = BASE_URL + `/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1`

  // MOVIE: search for for movies by their original, translated and alternative titles
  const SEARCH_MOVIE_URL = BASE_URL + `/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`

  // PERSON: search for people by their name and also 'known as' names
  const SEARCH_PERSON_URL = BASE_URL + `/search/person?query=${searchTerm}&include_adult=false&language=en-US&page=1`

  // decide what URL to use when calling searchIMDb, based on the value of 'searchType'
  if (searchType === 'all' || searchType === undefined) {
    searchIMDb(SEARCH_MULTI_URL, OPTIONS, searchTerm, searchType)
    console.log('search type performed: ' + searchType)
  } else if (searchType === 'movies') {
    searchIMDb(SEARCH_MOVIE_URL, OPTIONS, searchTerm, searchType)
    console.log('search type performed: ' + searchType)
  } else if (searchType === 'celebs') {
    searchIMDb(SEARCH_PERSON_URL, OPTIONS, searchTerm, searchType)
    console.log('search type performed: ' + searchType)
  }

  console.log('searchTerm = ' + searchTerm)
  buttons.searchBar.value = ''
}

// perform a search using the searchbar
async function searchIMDb (url, options, searchTerm, searchType) {
// create an arr that'll store the results
  const searchIMDbArr = []

  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()

      // we only want the first page, so 20 results is enough
      for (let i = 0; i <= 19; i++) {
        searchIMDbArr.push(data.results[i])
      }

      // start creating needed elements before 'search-result'
      const mainSearchPerformed = document.createElement('main')
      mainSearchPerformed.classList.add('search-performed')

      const searchTermDisplayed = document.createElement('div')
      searchTermDisplayed.classList.add('search-term-displayed')
      searchTermDisplayed.innerText = 'Search ' + `"${searchTerm}"`

      const searchResultsContainer = document.createElement('div')
      searchResultsContainer.classList.add('search-results-container')

      const selectedFilterName = document.createElement('div')
      selectedFilterName.classList.add('selected-filter-name')

      const resultsBoxContainer = document.createElement('div')
      resultsBoxContainer.classList.add('results-box-container')

      const resultsBox = document.createElement('div')
      resultsBox.classList.add('results-box')

      // display the proper MAIN for searches using ALL filter
      if (searchType === 'all' || searchType === undefined) {
        // store movie results only into an arr
        const movieResultsArr = []

        // store people results only into an arr
        const peopleResultsArr = []

        for (let i = 0; i <= 19; i++) {
          if (searchIMDbArr[i] && searchIMDbArr[i].media_type === 'movie') {
            selectedFilterName.innerText = 'All'
            movieResultsArr.push(searchIMDbArr[i])
          } else if (searchIMDbArr[i] && searchIMDbArr[i].gender) {
            peopleResultsArr.push(searchIMDbArr[i])
          }
        }

        console.log('Movies pushed: ')
        console.log(movieResultsArr)

        console.log('People pushed: ')
        console.log(peopleResultsArr)

        // create the SEARCH RESULT element for Movies
        movieResultsArr.forEach(result => {
          if (result !== undefined) {
            const searchResult = document.createElement('div')
            searchResult.classList.add('search-result')

            const searchResultPosterContainer = document.createElement('div')
            searchResultPosterContainer.classList.add('search-result-poster-container')

            const searchResultPoster = document.createElement('img')
            searchResultPoster.classList.add('search-result-poster')
            searchResultPoster.height = '75'
            searchResultPoster.alt = 'movie poster'

            if (result.poster_path && result.poster_path !== null) {
              searchResultPoster.src = `${IMAGE_URL + result.poster_path}`
            } else {
              searchResultPoster.src = '../src/images/placeholder-movie-poster.png'
            }

            const searchResultTextContainer = document.createElement('div')
            searchResultTextContainer.classList.add('search-result-text-container')

            const searchResultTitle = document.createElement('div')
            searchResultTitle.classList.add('search-result-title')

            if (result.title !== undefined && result.title !== null) {
              searchResultTitle.innerText = result.title
            }

            const searchResultYear = document.createElement('div')
            searchResultYear.classList.add('search-result-year')

            if (result.release_date) {
              searchResultYear.innerText = result.release_date.slice(0, 4)
            }

            const searchResultCast = document.createElement('div')
            searchResultCast.classList.add('search-result-cast')

            // display the first 3 actors by calling getMovieCredits() with every result's id
            async function displayMovieActors (movieID) {
              try {
                const movieCast = await getMovieCredits(movieID, OPTIONS)
                searchResultCast.innerText = movieCast[0] + ', ' + movieCast[1] + ', ' + movieCast[2]
              } catch (error) {
                console.log('Error: ', error)
              }
            }
            displayMovieActors(result.id)

            // append the elements
            searchResultPosterContainer.appendChild(searchResultPoster)
            searchResultTextContainer.append(searchResultTitle, searchResultYear, searchResultCast)
            searchResult.append(searchResultPosterContainer, searchResultTextContainer)
            resultsBox.appendChild(searchResult)
          }
        })

        // create the SEARCH RESULT element for People
        peopleResultsArr.forEach(result => {
          if (result !== undefined) {
            const searchResult = document.createElement('div')
            searchResult.classList.add('search-result')

            const searchResultPosterContainer = document.createElement('div')
            searchResultPosterContainer.classList.add('search-result-poster-container')

            const searchResultPoster = document.createElement('img')
            searchResultPoster.classList.add('search-result-poster')
            searchResultPoster.height = '75'
            searchResultPoster.alt = 'movie poster'

            if (result.profile_path && result.profile_path !== null) {
              searchResultPoster.src = `${IMAGE_URL + result.profile_path}`
            } else {
              searchResultPoster.src = '../src/images/placeholder-movie-poster.png'
            }

            const searchResultTextContainer = document.createElement('div')
            searchResultTextContainer.classList.add('search-result-text-container')

            const searchResultTitle = document.createElement('div')
            searchResultTitle.classList.add('search-result-title')

            if (result.name !== undefined && result.name !== null) {
              searchResultTitle.innerText = result.name
            }

            const searchResultKnownFor = document.createElement('div')
            searchResultKnownFor.classList.add('search-result-cast')

            if (result.known_for[0].name) {
              searchResultKnownFor.innerText = 'Known for: ' + result.known_for[0].name
            } else if (result.known_for[0].title) {
              searchResultKnownFor.innerText = 'Known for: ' + result.known_for[0].title
            }

            // append the elements
            searchResultPosterContainer.appendChild(searchResultPoster)
            searchResultTextContainer.append(searchResultTitle, searchResultKnownFor)
            searchResult.append(searchResultPosterContainer, searchResultTextContainer)
            resultsBox.appendChild(searchResult)
          }
        })
      } else if (searchType === 'movies') {
        // update filter display
        selectedFilterName.innerText = 'Movies'

        // create the SEARCH RESULT element for MOVIES filter
        searchIMDbArr.forEach(result => {
          if (result !== undefined) {
            const searchResult = document.createElement('div')
            searchResult.classList.add('search-result')

            const searchResultPosterContainer = document.createElement('div')
            searchResultPosterContainer.classList.add('search-result-poster-container')

            const searchResultPoster = document.createElement('img')
            searchResultPoster.classList.add('search-result-poster')
            searchResultPoster.height = '75'
            searchResultPoster.alt = 'movie poster'

            if (result.poster_path && result.poster_path !== null) {
              searchResultPoster.src = `${IMAGE_URL + result.poster_path}`
            } else {
              searchResultPoster.src = '../src/images/placeholder-movie-poster.png'
            }

            const searchResultTextContainer = document.createElement('div')
            searchResultTextContainer.classList.add('search-result-text-container')

            const searchResultTitle = document.createElement('div')
            searchResultTitle.classList.add('search-result-title')

            if (result.title !== undefined && result.title !== null) {
              searchResultTitle.innerText = result.title
            }

            const searchResultYear = document.createElement('div')
            searchResultYear.classList.add('search-result-year')

            if (result.release_date) {
              searchResultYear.innerText = result.release_date.slice(0, 4)
            }

            const searchResultCast = document.createElement('div')
            searchResultCast.classList.add('search-result-cast')

            // display the first 3 actors by calling getMovieCredits() with every result's id
            async function displayMovieActors (movieID) {
              try {
                const movieCast = await getMovieCredits(movieID, OPTIONS)
                searchResultCast.innerText = movieCast[0] + ', ' + movieCast[1] + ', ' + movieCast[2]
              } catch (error) {
                console.log('Error: ', error)
              }
            }
            displayMovieActors(result.id)

            // append the elements
            searchResultPosterContainer.appendChild(searchResultPoster)
            searchResultTextContainer.append(searchResultTitle, searchResultYear, searchResultCast)
            searchResult.append(searchResultPosterContainer, searchResultTextContainer)
            resultsBox.appendChild(searchResult)
          }
        })
      } else if (searchType === 'celebs') {
        // store people results only into an arr
        const peopleResultsArr = []

        for (let i = 0; i <= 19; i++) {
          if (searchIMDbArr[i] && searchIMDbArr[i].gender) {
            selectedFilterName.innerText = 'Celebs'
            peopleResultsArr.push(searchIMDbArr[i])
          }
        }
        peopleResultsArr.forEach(result => {
          if (result !== undefined) {
            const searchResult = document.createElement('div')
            searchResult.classList.add('search-result')

            const searchResultPosterContainer = document.createElement('div')
            searchResultPosterContainer.classList.add('search-result-poster-container')

            const searchResultPoster = document.createElement('img')
            searchResultPoster.classList.add('search-result-poster')
            searchResultPoster.height = '75'
            searchResultPoster.alt = 'movie poster'

            if (result.profile_path && result.profile_path !== null) {
              searchResultPoster.src = `${IMAGE_URL + result.profile_path}`
            } else {
              searchResultPoster.src = '../src/images/placeholder-movie-poster.png'
            }

            const searchResultTextContainer = document.createElement('div')
            searchResultTextContainer.classList.add('search-result-text-container')

            const searchResultTitle = document.createElement('div')
            searchResultTitle.classList.add('search-result-title')

            if (result.name !== undefined && result.name !== null) {
              searchResultTitle.innerText = result.name
            }

            const searchResultKnownFor = document.createElement('div')
            searchResultKnownFor.classList.add('search-result-cast')

            if (result.known_for[0].name) {
              searchResultKnownFor.innerText = 'Known for: ' + result.known_for[0].name
            } else if (result.known_for[0].title) {
              searchResultKnownFor.innerText = 'Known for: ' + result.known_for[0].title
            }

            // append the elements
            searchResultPosterContainer.appendChild(searchResultPoster)
            searchResultTextContainer.append(searchResultTitle, searchResultKnownFor)
            searchResult.append(searchResultPosterContainer, searchResultTextContainer)
            resultsBox.appendChild(searchResult)
          }
        })
      }

      resultsBoxContainer.appendChild(resultsBox)
      searchResultsContainer.append(selectedFilterName, resultsBoxContainer)
      mainSearchPerformed.append(searchTermDisplayed, searchResultsContainer)

      // Get the existing main element
      const existingMain = document.querySelector('main')

      // Check if there was at least one search performed
      const isSearchPerformed = existingMain && existingMain.classList.contains('search-performed')

      // Remove the existing main element based on the condition
      if (isSearchPerformed) {
        existingMain.parentNode.removeChild(existingMain)
      } else if (existingMain) {
        document.body.removeChild(existingMain)
      }

      document.querySelector('body').insertBefore(mainSearchPerformed, bodyChildren.footer)
      document.querySelector('html').style.backgroundColor = '#fafafa'

      console.log('SEARCH RESULTS: ')
      console.log(searchIMDbArr)
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// add ev listeners on both the searchBar and the searchIconBtn
buttons.searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleSearch()
  }
})
buttons.searchIconBtn.addEventListener('pointerdown', handleSearch)

//
// MOVIE LISTS URLs:

// GET a list of movies ordered by popularity
const POPULAR_URL = BASE_URL + '/movie/popular?language=en-US&page=1'

// GET a list of movies that are currently in theatres
const NOW_PLAYING_URL = BASE_URL + '/movie/now_playing?language=en-US&page=1'

// GET a list of movies that are being released soon
const UPCOMING_URL = BASE_URL + '/movie/upcoming?language=en-US&page=1'

// GET a list of movies ordered by rating
const TOP_RATED_URL = BASE_URL + '/movie/top_rated?language=en-US&page=1'

//
// PEOPLE LIST URL:

// GET a list of trending people
const TRENDING_PEOPLE_URL = BASE_URL + '/trending/person/week?language=en-US'

//
// Use IMAGE_URL as a base URL to GET the poster/backdrop image of a MOVIE or the profile image of a PERSON
const IMAGE_URL = 'https://image.tmdb.org/t/p/original'

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

        // store movie's id, so we can use it later when getting movie's trailer
        movieCard.dataset.movieId = movie.id

        const cardPosterContainer = document.createElement('div')
        cardPosterContainer.classList.add('card-poster-container')

        const cardPoster = document.createElement('img')
        cardPoster.classList.add('card-poster')
        cardPoster.alt = 'movie-poster'
        cardPoster.width = '190'
        cardPoster.src = `${IMAGE_URL + movie.poster_path}`

        cardPosterContainer.appendChild(cardPoster)

        const cardTextContainer = document.createElement('div')
        cardTextContainer.classList.add('card-text-container')

        const genresContainer = document.createElement('div')
        genresContainer.classList.add('genres-container')

        // store maximum 2 genre_ids for main movie in an arr
        const movieGenresArr = []

        if (movie.genre_ids[0] && movie.genre_ids[1]) {
          movieGenresArr.push(movie.genre_ids[0], movie.genre_ids[1])
        } else if (movie.genre_ids[0]) {
          movieGenresArr.push(movie.genre_ids[0])
        }

        // display each genre inside mainGenres element
        movieGenresArr.forEach(genreId => {
          const genreName = findGenreNameById(genreId)
          const movieGenre = document.createElement('div')
          movieGenre.innerText = genreName
          movieGenre.classList.add('movie-genre')
          genresContainer.appendChild(movieGenre)
        })

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
        cardTextContainer.appendChild(genresContainer)
        cardTextContainer.appendChild(movieCardTitle)
        cardTextContainer.appendChild(addToWatchlistBtn)
        cardTextContainer.appendChild(trailerBtn)
        movieCard.appendChild(cardPosterContainer)
        movieCard.appendChild(cardTextContainer)
        movieCardsContainers.upcomingMovieCardsContainer.appendChild(movieCard)
      })
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

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

        // store movie's id, so we can use it later when getting movie's trailer
        movieCard.dataset.movieId = movie.id

        const cardPosterContainer = document.createElement('div')
        cardPosterContainer.classList.add('card-poster-container')

        const cardPoster = document.createElement('img')
        cardPoster.classList.add('card-poster')
        cardPoster.alt = 'movie-poster'
        cardPoster.width = '190'
        cardPoster.src = `${IMAGE_URL + movie.poster_path}`

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
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

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
      popularElements.mainPoster.src = IMAGE_URL + popularMoviesArr[0].poster_path
      popularElements.mainImage.src = IMAGE_URL + popularMoviesArr[0].backdrop_path
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
      popularElements.secondPopPoster.src = IMAGE_URL + popularMoviesArr[1].poster_path
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
      popularElements.thirdPopPoster.src = IMAGE_URL + popularMoviesArr[2].poster_path
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
      popularElements.fourthPopPoster.src = IMAGE_URL + popularMoviesArr[3].poster_path
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

        // store movie's id, so we can use it later when getting movie's trailer
        movieCard.dataset.movieId = movie.id

        const cardPosterContainer = document.createElement('div')
        cardPosterContainer.classList.add('card-poster-container')

        const cardPoster = document.createElement('img')
        cardPoster.classList.add('card-poster')
        cardPoster.alt = 'movie-poster'
        cardPoster.width = '190'
        cardPoster.src = `${IMAGE_URL + movie.poster_path}`

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
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// GET TRENDING PEOPLE for the 'TRENDING THIS WEEK' section
async function getTrendingPeople (url, options) {
  // create an arr that'll store the people
  const trendingPeopleArr = []

  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()

      // push the people that we'll display into an arr
      trendingPeopleArr.push(data.results[0], data.results[1], data.results[2], data.results[3], data.results[4])

      console.log('TRENDING PEOPLE TODAY LIST: ')
      console.log(trendingPeopleArr)

      trendingPeopleArr.forEach(person => {
        const trendingPersonCard = document.createElement('div')
        trendingPersonCard.classList.add('trending-person-card')

        const profilePictureContainer = document.createElement('div')
        profilePictureContainer.classList.add('profile-picture-container')

        const profilePicture = document.createElement('img')
        profilePicture.alt = 'avatar'
        profilePicture.width = '190'
        profilePicture.src = IMAGE_URL + person.profile_path

        const trendingPersonName = document.createElement('div')
        trendingPersonName.classList.add('trending-person-name')
        trendingPersonName.innerText = person.name

        profilePictureContainer.appendChild(profilePicture)
        trendingPersonCard.appendChild(profilePictureContainer)
        trendingPersonCard.appendChild(trendingPersonName)

        trendingPeopleCardsContainer.appendChild(trendingPersonCard)
      })
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// GET the TRAILER for a movie using movie_id
async function getMovieTrailer (url, options) {
  try {
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)

      // now we return the key needed to access the YouTube link
      for (let i = 0; i <= 19; i++) {
        if (data.results[i].type && data.results[i].type === 'Trailer') {
          return data.results[i].key
        }
      }

      // return data.results[0].key
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

// add an event listener to the main container of movie cards
document.addEventListener('click', async function (event) {
  // check if the clicked element is a "Trailer" btn
  if (event.target.classList.contains('trailer-btn')) {
    // get the movie ID from the corresponding movie card
    const movieCard = event.target.closest('.movie-card')
    const movieId = movieCard.dataset.movieId // here's where we use the 'data-movie-id' created inside every movie card

    // use the movie ID to fetch the trailer
    const trailerUrl = BASE_URL + `/movie/${movieId}/videos?language=en-US`
    try {
      // fetch the trailer using the getMovieTrailer()
      const trailerKey = await getMovieTrailer(trailerUrl, OPTIONS)

      // play the movie trailer by opening a new YouTube tab
      console.log('Trailer Key:', trailerKey)
      const trailer = `https://www.youtube.com/watch?v=${trailerKey}`
      window.open(trailer, '_blank')
    } catch (error) {
      console.log('Error fetching trailer:', error)
    }
  }
})

// GET 'MOVIE CREDITS' passing movie_id
async function getMovieCredits (id, options) {
  try {
    const response = await fetch(BASE_URL + `/movie/${id}/credits`, options)

    if (response.status === 200) {
      const data = await response.json()
      const movieCastArr = []
      if (data.cast) {
        movieCastArr.push(data.cast[0].name, data.cast[1].name, data.cast[2].name)
      } else {
        console.log('Movie cast is smaller than 3.')
      }
      return movieCastArr
    } else {
      console.log('There was a problem with the request.')
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

function makeRequestsAtStart () {
  getPopularMovies(POPULAR_URL, OPTIONS)
  getNowPlayingMovies(NOW_PLAYING_URL, OPTIONS)
  getUpcomingMovies(UPCOMING_URL, OPTIONS)
  getTopRated(TOP_RATED_URL, OPTIONS)
  getTrendingPeople(TRENDING_PEOPLE_URL, OPTIONS)
}

makeRequestsAtStart()
