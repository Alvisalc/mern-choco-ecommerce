import './NewCollections.css';
import Item from '../Item/Item';
import new_collections from '../new_collections';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const NewCollections = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="new-collections">
        <h2>New Collection</h2>
        <hr/>
        <div className="slider-container">
        <Slider {...settings}>
            {new_collections.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.imageUrl} price={item.price}/>
            })}
        </Slider>
        </div>
    </div>
  );
};

