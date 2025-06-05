import React from 'react'
import H1 from '../components/UI/H1/H1'
import Search from '../components/UI/Search/Search'
import '../styles/stylePage/FavoritesPage.css'
import SearchModels from '../components/SearchModels/SearchModels'

function FavoritesPage() {
  return (
    <div className="page">
      <div className='favorites__block-name'>
        <H1>Favorites</H1>
        <Search
          style={{
            width: '1334px',
          }}
        />
      </div>
      
      <SearchModels/>
    </div>
  )
}

export default FavoritesPage
