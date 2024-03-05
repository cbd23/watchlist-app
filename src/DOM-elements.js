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
const homeBtn = document.querySelector('.logo-container')
const menuBtn = document.querySelector('.menu-container')
const searchFilterBtn = document.querySelector('.search-filter-container')
const searchBar = document.getElementById('searchbar')
const searchIconBtn = document.querySelector('.search-icon-container')

export const buttons = {
  homeBtn,
  menuBtn,
  searchFilterBtn,
  searchBar,
  searchIconBtn
}

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
