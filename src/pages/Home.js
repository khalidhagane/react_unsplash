import { useState } from 'react';
import SearchComponent from '../components/search/SearchComponent';
import { getPhotos } from '../services/unsplash';

import Image from '../components/image/ImageComponent';
import ErrorAlert from '../components/error/ErrorAlert';
import Loading from '../components/loading/Loading';
import Paginate from '../components/paginate/Paginate';

//creat context

function Home() {
  const [searchImage, setSearchImage] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState('');

  const getData = async (p = 1) => {
    setImages([]);
    try {
      setLoading(true);
      const data = await getPhotos(searchImage, p);
      setImages(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
      setError('');
    } catch (e) {
      setError('Oops, something went wrong');
      setLoading(false);
    }
  };

  const handlePageClick = (e) => {
    getData(e.selected + 1);
  };

  return (
    <main
      className='bg-slate-100 h-screen	pb-6
    '
    >
      <SearchComponent getData={getData} setSearch={setSearchImage} />
      {error && <ErrorAlert error={error} />}
      {loading ? (
        <Loading />
      ) : (
        <section className=' '>
          <div className='container mx-auto my-20'>
            <div className='-m-1 flex flex-wrap md:-m-2'>
              {images.map(({ id, alt_description, urls }) => (
                <Image id={id} alt_description={alt_description} urls={urls} />
              ))}
            </div>
          </div>
        </section>
      )}

      {!error && (
        <div className='pb-10'>
          <Paginate
            page={page}
            totalPages={totalPages}
            handlePageClick={handlePageClick}
          />
        </div>
      )}
    </main>
  );
}

export default Home;
