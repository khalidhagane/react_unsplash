import React from 'react';

export default function SearchComponent({ setSearch, getData }) {
  return (
    <div className='flex items-center bg-slate-900 py-10'>
      <div className='max-w-md mx-auto w-full'>
        <div className='flex items-center'>
          <div className='flex  rounded'>
            <input
              type='text'
              className='block w-full indent- px-4 py-2 text-Zinc-900 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring-2 focus:ring-opacity-40'
              placeholder='Search...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={getData}
              type='button'
              className='px-4 text-white bg-sky-600 border-l rounded '
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
