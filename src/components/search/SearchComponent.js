import React from 'react';

export default function SearchComponent({ setSearch, getData }) {
  return (
    <div className='flex items-center bg-gray-800 py-5'>
      <div className='mx-8 w-full'>
        <div className='flex justify-between items-center		w-full'>
          <h1 className='text-white text-xl font-semibold	'>FIAMANE</h1>
          
          <div className='w-96'>
            <label
              for='default-search'
              class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
            >
              Search
            </label>
            <div class='relative'>
              <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  class='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                class='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 focus:outline-none  border border-gray-300  dark:placeholder-gray-400 '
                placeholder='Search Mockups, Logos...'
                required=''
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
               onClick={getData}
                type='submit'
                class='text-white absolute right-2.5 bottom-2.5 bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Search
              </button>
            </div>
          </div>
          <div> </div>
        </div>
      </div>
    </div>
  );
}
