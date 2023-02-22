import React from 'react'

import { TailSpin } from 'react-loader-spinner';

function Loading() {
  return (
    <div className='w-screen min-h-[600px] flex items-center justify-center'>
          <TailSpin
            height='80'
            width='80'
            color='#4fa94d'
            ariaLabel='tail-spin-loading'
            radius='1'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </div>
  )
}

export default Loading