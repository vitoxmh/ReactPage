import React from 'react'
import './gallery.scss'

 

function Gallery() {


    React.useEffect(() => {


        getGallery();
    
     
    }, []);

    const [foto, setPhoto] = React.useState([]);



    const getGallery = async () => {


        const data = await fetch('https://api.pexels.com/v1/search?query=nature', {
                headers: {
                    'Authorization': '563492ad6f91700001000001c11a41ff7f0747e7bbad1a11de252cef'
                }
            })
    
        const photos = await data.json();
        console.log(photos.photos);
        setPhoto(photos.photos);
    
      }
    

    return (
        <div className="gallery">
            {

                foto.map(item => (
                    
                    <a href={item.src.original} title={item.photographer}><img class="gallery__image" key={item.id} src={item.src.large} /></a>

                ))

            }

        </div>
    )
}

export default Gallery
