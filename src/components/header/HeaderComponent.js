import React from 'react'
import SearchComponent from '../search/SearchComponent'

function HeaderComponent() {
  return (
    <div className="flex items-center bg-slate-900 py-10">
        <div className='max-w-md mx-auto w-full'>
    <SearchComponent/>
    </div>
    </div>
  )
}

export default HeaderComponent