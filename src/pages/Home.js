import { useState } from 'react';
import SearchComponent from '../components/search/SearchComponent';
import { getPhotos } from '../services/unsplash';
import { TailSpin } from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import Image from '../components/image/Image';
import ErrorAlert from '../components/error/ErrorAlert';

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
    <main>
      <SearchComponent getData={getData} setSearch={setSearchImage} />
      {error && (
        <ErrorAlert error={error}/>
      )}
      {loading ? (
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
      ) : (
        <section className='overflow-hidden text-neutral-700'>
          <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
            <div className='-m-1 flex flex-wrap md:-m-2'>
              {images.map(({ id, alt_description, urls }) => (
                <Image id={id} alt_description={alt_description} urls={urls} />
              ))}
            </div>
          </div>
        </section>
      )}

      {!error && (
        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel='<'
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName={'paginate'}
          pageLinkClassName={'paginate__page-link'}
          previousLinkClassName={`paginate__prev-link ${
            page === 1 ? 'disabled' : ''
          }`}
          nextLinkClassName={`paginate__next-link ${
            page === totalPages ? 'disabled' : ''
          }`}
          activeClassName={'active'}
        />
      )}
    </main>
  );
}

export default Home;
