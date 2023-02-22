import {createContext,useState} from 'react'
import HeaderComponent from '../components/header/HeaderComponent'
import ImagesComponent from '../components/images/ImageComponent'
import useAxios from '../hooks/useAxios';

// import SearchComponent from '../components/search/SearchComponent'

//creat context
export const ImageContext = createContext();

function Home() {
    const [searchImage, setSearchImage] = useState('');
    const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_MY_ACCESS_KEY}`);

    console.log(process.env.REACT_APP_MY_ACCESS_KEY)

    console.log(response)
    const value = {
        response,
        isLoading,
        error,
        fetchData,
        // searchImage,
        // setSearchImage
      }

  return (
    <div className='bg-slate-800'>
    <ImageContext.Provider value={value}>
        
    <HeaderComponent/>
    <ImagesComponent/>
    </ImageContext.Provider>
    </div>
  )
}

export default Home