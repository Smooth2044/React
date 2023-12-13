import React from 'react';
import useApi from '../hooks/useApi';
import ImageItem2 from './ImageItem';


const DisplayStickers = ({ category }) => {

    const url = `https://api.giphy.com/v1/stickers/search?api_key=hdsUh9kdHGPpSi4kHFyhxRsqmlfzb3AJ&q=${category}&limit=10`;
    const { loading, data } = useApi(url);

    return ( 
        <div className='container-stickers'>
            {
                loading ?
                    data.map(img => (
                        <ImageItem2 key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                    ))
                : ''
            }
        </div>

    );
}

export default DisplayStickers;