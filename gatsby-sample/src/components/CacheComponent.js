import React, { useState } from 'react';

import Img from 'react-image'

const images__1 = [
    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/aaf1badb-534e-40ce-8afe-32543b2a87e3-1587981205502.png',
    'https://media1.giphy.com/media/2wgWdnnajgQIyjvnNy/giphy-downsized-medium.gif?cid=e8452e68eebdc35c1fcb33be1b44e34f354057274632bc6c&rid=giphy-downsized-medium.gif'
];

const images__2 = [
    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/b8b25c67-5487-4135-bfc5-ebe0cded4d8a-1587983216329.png',
    'https://media1.giphy.com/media/SVSx34Rna6oNzmQYv0/giphy.gif?cid=e8452e685525ea9f612eb87f892fcb94ab86077fc86283e3&rid=giphy.gif'
];

const CacheComponent = () => {
    
    const [images, setImages] = useState([]);
    const [idx, setIdx] = useState(true);

    const handleAdd = () => {

        if ( idx ) {
            setImages( images__1 )
            setIdx( false )
        }
        else {
            setImages( images__2 )
            setIdx( true )
        
        } // end if 

        console.log(123)

    } // end handleAdd

    return (
        <div>
            
            <button onClick={handleAdd} >add</button>[image-cache]

            {images.map((element,index) => (
            <Img key={index} src={element} />
            ))}
    
        </div>
    );

} // end CacheComponent

export default CacheComponent;
