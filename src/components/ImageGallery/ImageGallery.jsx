
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallerystyled';

export const ImageGallery = ({ images }) => {
  
  return (
    <List>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
          />  
        ))}
    </List>
  )
}

