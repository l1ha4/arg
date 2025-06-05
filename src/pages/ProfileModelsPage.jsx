import React from 'react'
import BlockProfileModels from '../components/ComponentsPage/ProfileModelsPage/BlockProfileModels/BlockProfileModels'
import '../styles/stylePage/ProfileModelsPage.css'
import Search from '../components/UI/Search/Search'
import H1 from '../components/UI/H1/H1'
import SearchModels from '../components/SearchModel/SearchModels.jsx'

function ProfileModelsPage() {
  return (
    <div className="page">
      <div>
        <BlockProfileModels />

        <div className="profile-models__name-page_block">
          <H1>Author models</H1>{' '}
          <Search
            style={{
              width: '1230px',
            }}
          />
        </div>

        <SearchModels />
      </div>
    </div>
  )
}

export default ProfileModelsPage
