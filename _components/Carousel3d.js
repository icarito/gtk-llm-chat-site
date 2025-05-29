import { Swiper } from 'https://cdn.jsdelivr.net/npm/swiper@10/+esm';
import EffectCoverflow from 'https://cdn.jsdelivr.net/npm/swiper@10/modules/effect-coverflow.min.mjs';
// import Autoplay from 'https://cdn.jsdelivr.net/npm/swiper@10/modules/autoplay.min.mjs';
import 'Carousel3d.css';

function Carousel3({ items }) {
  const swiperRef = React.useRef(null);
  const [backdrop, setBackdrop] = React.useState(items[1].desktop);

  React.useEffect(() => {
    function initSwiper() {
      if (swiperRef.current) {
        const swiper = new Swiper(swiperRef.current, {
          effect: 'coverflow',
          modules: [EffectCoverflow],
          centeredSlides: true,
          slidesPerView: 'auto',
          initialSlide: 1,
          speed: 1800,
          coverflowEffect: {
            rotate: 30,
            scale: 0.8,
            stretch: 0,
            depth: 500,
            slideShadows: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          /* autoplay: {
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          },*/
        });
        swiper.on('slideChange', () => {
          console.log('Slide changed to index:', items[swiper.activeIndex].title);
          setBackdrop(items[swiper.activeIndex].desktop);
        });
      }
    }
    initSwiper();
  }, [items]);

  return (
    <div className="desktop"
      style={{ backgroundImage: `url(${backdrop})` }}>
      <div
        className="swiper"
        ref={swiperRef}
        style={{ width: '100%', maxWidth: '980px', height: '100%' }}
      >
        <div className="swiper-wrapper">
          {items.map((item, idx) => (
            <div className="swiper-slide" key={idx} style={{
              width: '550px',
              textAlign: 'center',
              background: '#0000',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Carousel3;