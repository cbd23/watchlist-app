// direct children of the body element:
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')

export const bodyChildren = {
  header,
  main,
  footer
}

// BUTTONS:

// inside Nav
const homeBtn = document.querySelector('.logo-container')
const menuBtn = document.querySelector('.menu-container')
const searchFilterBtn = document.querySelector('.search-filter-container')
const searchBar = document.getElementById('searchbar')
const searchIconBtn = document.querySelector('.search-icon-container')
const searchFilterText = document.querySelector('.search-filter-text')
const dropdownMenuBtn = document.querySelector('.dropdown-menu')

// store watchlist modal elements
const watchlistModal = document.querySelector('.watchlist-modal')
const watchlistModalBtn = document.querySelector('.watchlist-container')
const watchlistCloseBtn = document.querySelector('.watchlist-close-btn')

// open watchlist-modal
watchlistModalBtn.addEventListener('pointerdown', () => {
  watchlistModal.showModal()
})

// close watchlist-modal
watchlistCloseBtn.addEventListener('pointerdown', () => {
  watchlistModal.close()
})

// RELOAD website when clicking HOME btn
homeBtn.addEventListener('pointerdown', () => {
  window.location.href = 'https://cbd23.github.io/watchlist-app/'
})

// MOVIE INFOCARD MODAL
const movieInfocardModal = document.querySelector('.movie-infocard-modal')
const movieInfocardCloseBtn = document.querySelector('.movie-infocard-close-btn')
const movieInfocardContent = document.querySelector('.movie-infocard-content')

export const infocardModal = {
  movieInfocardModal,
  movieInfocardCloseBtn,
  movieInfocardContent
}

movieInfocardCloseBtn.addEventListener('pointerdown', () => {
  movieInfocardModal.close()
})

// inside dropdown menu
const allFilterBtn = document.querySelector('.all-filter-btn')
const moviesFilterBtn = document.querySelector('.movies-filter-btn')
const celebsFilterBtn = document.querySelector('.celebs-filter-btn')
const keywordsFilterBtn = document.querySelector('.keywords-filter-btn')

export const buttons = {
  homeBtn,
  menuBtn,
  searchFilterBtn,
  searchBar,
  searchIconBtn,
  searchFilterText,
  dropdownMenuBtn,
  watchlistModal,
  watchlistModalBtn,
  watchlistCloseBtn,
  allFilterBtn,
  moviesFilterBtn,
  celebsFilterBtn,
  keywordsFilterBtn
}

// "DISPLAY filters" btns
searchFilterBtn.addEventListener('pointerdown', () => {
  dropdownMenuBtn.style.display = 'block'
})

searchFilterBtn.addEventListener('mouseleave', () => {
  dropdownMenuBtn.style.display = 'none'
})

dropdownMenuBtn.addEventListener('mouseenter', () => {
  dropdownMenuBtn.style.display = 'block'
})

dropdownMenuBtn.addEventListener('mouseleave', () => {
  dropdownMenuBtn.style.display = 'none'
})

dropdownMenuBtn.addEventListener('pointerdown', () => {
  dropdownMenuBtn.style.display = 'none'
})

// "SELECT filter" btns
allFilterBtn.addEventListener('pointerdown', () => {
  searchFilterText.innerText = 'All'
})

moviesFilterBtn.addEventListener('pointerdown', () => {
  searchFilterText.innerText = 'Movies'
})

celebsFilterBtn.addEventListener('pointerdown', () => {
  searchFilterText.innerText = 'Celebs'
})

keywordsFilterBtn.addEventListener('pointerdown', () => {
  searchFilterText.innerText = 'Keywords'
})

// POPULAR section elements:
//
// for the MAIN movie
const mainPoster = document.querySelector('.main-poster')
const mainImage = document.querySelector('.popular-main-image')
const mainTitle = document.querySelector('.main-title')
const mainGenres = document.querySelector('.main-genres')
const mainOverview = document.querySelector('.main-overview')

// for THE SECOND MOST POPULAR movie
const secondPopPoster = document.querySelector('.second-pop-poster')
const popTwoTitle = document.querySelector('.pop-two-title')
const popTwoGenres = document.querySelector('.pop-two-genres')

// for THE THIRD MOST POPULAR movie
const thirdPopPoster = document.querySelector('.third-pop-poster')
const popThreeTitle = document.querySelector('.pop-three-title')
const popThreeGenres = document.querySelector('.pop-three-genres')

// for THE FOURTH MOST POPULAR movie
const fourthPopPoster = document.querySelector('.fourth-pop-poster')
const popFourTitle = document.querySelector('.pop-four-title')
const popFourGenres = document.querySelector('.pop-four-genres')

export const popularElements = {
  mainPoster,
  mainImage,
  mainTitle,
  mainGenres,
  mainOverview,
  secondPopPoster,
  popTwoTitle,
  popTwoGenres,
  thirdPopPoster,
  popThreeTitle,
  popThreeGenres,
  fourthPopPoster,
  popFourTitle,
  popFourGenres
}

// store 'movie cards container' elements for the first three small sections
const inTheatresMovieCardsContainer = document.querySelector('.in-theatres-movie-cards-container')
const upcomingMovieCardsContainer = document.querySelector('.upcoming-movie-cards-container')
const topRatedMovieCardsContainer = document.querySelector('.top-rated-movie-cards-container')

export const movieCardsContainers = {
  inTheatresMovieCardsContainer,
  upcomingMovieCardsContainer,
  topRatedMovieCardsContainer
}

// store the 'trending-people-cards-container' element from the 'Trending people' section
export const trendingPeopleCardsContainer = document.querySelector('.trending-people-cards-container')
