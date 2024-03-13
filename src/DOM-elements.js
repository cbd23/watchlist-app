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

// create a variable that stores the selected filter's value (to perform the proper SEARCH)
let searchType
console.log(searchType)

// "SELECT filter" btns
allFilterBtn.addEventListener('pointerdown', () => {
  console.log('All was pressed')

  searchFilterText.innerText = 'All'
  searchType = 'all'

  console.log(searchType)
})

moviesFilterBtn.addEventListener('pointerdown', () => {
  console.log('Movies was pressed')

  searchFilterText.innerText = 'Movies'
  searchType = 'movies'
})

celebsFilterBtn.addEventListener('pointerdown', () => {
  console.log('Celebs was pressed')

  searchFilterText.innerText = 'Celebs'
  searchType = 'celebs'
})

keywordsFilterBtn.addEventListener('pointerdown', () => {
  console.log('Keywords was pressed')

  searchFilterText.innerText = 'Keywords'
  searchType = 'keywords'
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
