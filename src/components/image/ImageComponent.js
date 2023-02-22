import React from 'react';

function ImageComponent({ id, alt_description, urls }) {
  return (
    <div key={id} className='flex w-1/3 flex-wrap'>
      <div className='w-full p-1 md:p-2'>
        <img
          alt={alt_description}
          className='block h-full w-full rounded-lg object-cover object-center'
          src={urls.small}
        />
      </div>
    </div>
  );
}

export default ImageComponent;
