import { findGenreNameById } from './index.js'

const IMAGE_URL = 'https://image.tmdb.org/t/p/original'

export class Movie {
  constructor (id, title, overview, releaseDate, genreIds, posterPath, voteAverage) {
    this.id = id
    this.title = title
    this.overview = overview
    this.releaseDate = releaseDate
    this.genreIds = genreIds
    this.posterPath = posterPath
    this.voteAverage = voteAverage
  }
}

export class Watchlist {
  constructor (name) {
    this.name = name
    this.watchlistArr = []
  }

  // Method to add a movie to the watchlist
  addToWatchlist (movie) {
    if (this.watchlistArr.some((item) => item.id === movie.id)) {
      alert('This movie is already in your Watchlist.')
    } else {
      this.watchlistArr.push(movie)
      this.updateWatchlistModal() // Call the method to update the watchlist modal
    }
  }

  // Method to remove a movie from the watchlist
  removeFromWatchlist (movie) {
    // Check if the movie object is defined
    if (!movie) {
      console.error('Cannot remove an undefined movie from the watchlist.')
      return
    }

    // Find the index of the movie with the same ID in the watchlistArr
    const index = this.watchlistArr.findIndex(item => item.id === movie.id)

    // If the movie is found, remove it from the watchlistArr
    if (index !== -1) {
      this.watchlistArr.splice(index, 1)
      // Update the watchlist modal
      this.updateWatchlistModal()
    }
  }

  // Method to update the watchlist modal
  updateWatchlistModal () {
    // Get the ul element where watchlist movies will be displayed
    const watchlistUl = document.querySelector('.watchlist-ul')

    // Clear the existing movie list before rendering
    watchlistUl.innerHTML = ''

    // Render each movie in the watchlistArr
    this.watchlistArr.forEach(movie => {
      // Create a new li element for the movie
      const watchlistMovieLi = document.createElement('li')
      watchlistMovieLi.classList.add('watchlist-movie-card')

      // Set the movie ID as a data attribute
      watchlistMovieLi.setAttribute('data-movie-id', movie.id)

      // Create elements for the movie info
      const movieInfo = document.createElement('div')
      movieInfo.classList.add('movie-info')

      const posterContainer = document.createElement('div')
      posterContainer.classList.add('watchlist-movie-poster-container')

      const posterImg = document.createElement('img')
      posterImg.src = `${IMAGE_URL + movie.posterPath}`
      posterImg.alt = 'movie-poster'
      posterImg.height = '75'

      posterContainer.appendChild(posterImg)

      const movieText = document.createElement('div')
      movieText.classList.add('watchlist-movie-text')

      const movieTitle = document.createElement('div')
      movieTitle.classList.add('watchlist-movie-title')
      movieTitle.innerText = `${movie.title} (${movie.releaseDate})`

      const movieGenres = document.createElement('div')
      movieGenres.classList.add('watchlist-movie-genres')
      movieGenres.innerText = findGenreNameById(movie.genreIds)

      movieText.appendChild(movieTitle)
      movieText.appendChild(movieGenres)

      movieInfo.appendChild(posterContainer)
      movieInfo.appendChild(movieText)

      // Create elements for movie actions
      const movieActions = document.createElement('div')
      movieActions.classList.add('movie-actions')

      const watchTrailerAction = document.createElement('div')
      watchTrailerAction.classList.add('watch-trailer-action', 'watchlist-modal-action-btn')
      watchTrailerAction.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg>Trailer'

      const markAsViewedAction = document.createElement('div')
      markAsViewedAction.classList.add('mark-as-viewed-action', 'watchlist-modal-action-btn')
      markAsViewedAction.innerHTML = `
      <input type="checkbox" id="watchlist-modal-viewed-movie" name="viewed-movie">
      <label for="watchlist-modal-viewed-movie">Watched</label>`

      const deleteAction = document.createElement('div')
      deleteAction.classList.add('delete-action', 'watchlist-modal-action-btn')
      deleteAction.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>Remove'

      movieActions.appendChild(watchTrailerAction)
      movieActions.appendChild(markAsViewedAction)
      movieActions.appendChild(deleteAction)

      // Append movie info and actions to the watchlistMovieLi
      watchlistMovieLi.appendChild(movieInfo)
      watchlistMovieLi.appendChild(movieActions)

      // Append the li element to the ul.watchlist-ul
      watchlistUl.appendChild(watchlistMovieLi)
    })
  }
}
