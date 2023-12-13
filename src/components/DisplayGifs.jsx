import React from 'react';
import useApi from '../hooks/useApi';
import ImageItem from './ImageItem';

const DisplayGifs = ({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=hdsUh9kdHGPpSi4kHFyhxRsqmlfzb3AJ&q=${category}&limit=10`;
    const { loading, data } = useApi(url);

    return ( 
        <div className='container-gifs'>
            {
                loading ?
                    data.map(img => (
                        <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                    ))
                : ''
            }
        </div>

     );
}
 
export default DisplayGifs;