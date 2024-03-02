// BUTTONS:

const homeBtn = document.querySelector('.logo-container')
const menuBtn = document.querySelector('.menu-container')
const searchFilterBtn = document.querySelector('.search-filter-container')
const searchBarBtn = document.getElementById('searchbar')
const searchIconBtn = document.querySelector('.search-icon-container')

export const buttons = {
  homeBtn,
  menuBtn,
  searchFilterBtn,
  searchBarBtn,
  searchIconBtn
}

// POPULAR section elements:

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
