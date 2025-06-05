import React from 'react'
import SearchBlock from '../components/Navbar/SearchBlock/SearchBlock'
import H1 from '../components/UI/H1/H1'
import '../styles/stylePage/SearchPage.css'
import ModelItem from '../components/ModelItem/ModelItem'
import ListNumber from '../components/UI/ListNumber/ListNumber'

function SearchPage() {
  return (
    <div className="page">
      <H1 cN="search_h1 ">SEARCH RESULTS</H1>
      <div className="search__models">
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
        <ModelItem />
      </div>
      <ListNumber/>
    </div>
  )
}

export default SearchPage
