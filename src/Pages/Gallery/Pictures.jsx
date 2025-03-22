import React from 'react'
import './pictures.css'
import gallery1 from '../../assets/images/gallery/gallery48.jpg';
import gallery2 from '../../assets/images/gallery/gallery47.jpg';
import gallery3 from '../../assets/images/gallery/gallery46.jpg';
import gallery4 from '../../assets/images/gallery/gallery45.jpg';
import gallery5 from '../../assets/images/gallery/gallery44.jpg';
import gallery6 from '../../assets/images/gallery/gallery43.jpg';
import gallery7 from '../../assets/images/gallery/gallery42.jpg';
import gallery8 from '../../assets/images/gallery/gallery41.jpg';
import gallery9 from '../../assets/images/gallery/gallery40.jpg';
import gallery10 from '../../assets/images/gallery/gallery39.jpg';
import gallery11 from '../../assets/images/gallery/gallery38.jpg';
import gallery12 from '../../assets/images/gallery/gallery37.jpg';
import gallery13 from '../../assets/images/gallery/gallery36.jpg';
import gallery14 from '../../assets/images/gallery/gallery35.jpg';
import gallery15 from '../../assets/images/gallery/gallery34.jpg';
import gallery16 from '../../assets/images/gallery/gallery33.jpg';
import gallery17 from '../../assets/images/gallery/gallery32.jpg';
import gallery18 from '../../assets/images/gallery/gallery31.jpg';
import gallery19 from '../../assets/images/gallery/gallery30.jpg';
import gallery20 from '../../assets/images/gallery/gallery29.jpg';
import gallery21 from '../../assets/images/gallery/gallery28.jpg';
import gallery22 from '../../assets/images/gallery/gallery27.jpg';
import gallery23 from '../../assets/images/gallery/gallery26.jpg';
import gallery24 from '../../assets/images/gallery/gallery25.jpg';
import gallery25 from '../../assets/images/gallery/gallery24.jpg';
import gallery26 from '../../assets/images/gallery/gallery23.jpg';
import gallery27 from '../../assets/images/gallery/gallery22.jpg';
import gallery28 from '../../assets/images/gallery/gallery21.jpg';
import gallery29 from '../../assets/images/gallery/gallery20.jpg';
import gallery30 from '../../assets/images/gallery/gallery19.jpg';
import gallery31 from '../../assets/images/gallery/gallery18.jpg';
import gallery32 from '../../assets/images/gallery/gallery17.jpg';
import gallery33 from '../../assets/images/gallery/gallery16.jpg';
import gallery34 from '../../assets/images/gallery/gallery15.jpg';
import gallery35 from '../../assets/images/gallery/gallery14.jpg';
import gallery36 from '../../assets/images/gallery/gallery13.jpg';
import gallery37 from '../../assets/images/gallery/gallery12.jpg';
import gallery38 from '../../assets/images/gallery/gallery11.jpg';
import gallery39 from '../../assets/images/gallery/gallery10.jpg';
import gallery40 from '../../assets/images/gallery/gallery9.jpg';
import gallery41 from '../../assets/images/gallery/gallery8.jpg';
import gallery42 from '../../assets/images/gallery/gallery7.jpg';
import gallery43 from '../../assets/images/gallery/gallery6.jpg';
import gallery44 from '../../assets/images/gallery/gallery5.jpg';
import gallery45 from '../../assets/images/gallery/gallery4.jpg';
import gallery46 from '../../assets/images/gallery/gallery3.jpg';
import gallery47 from '../../assets/images/gallery/gallery2.jpg';
import gallery48 from '../../assets/images/gallery/gallery1.jpg';

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10,
  gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20,
  gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29, gallery30,
  gallery31, gallery32, gallery33, gallery34, gallery35, gallery36, gallery37, gallery38, gallery39, gallery40,
  gallery41, gallery42, gallery43, gallery44, gallery45, gallery46, gallery47, gallery48
];


const Pictures = () => {
  return (
    <>
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="pictures">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt='img' />
        ))}
      </div>
    </div>
    </>
  )
}

export default Pictures
