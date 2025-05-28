
// Incluir SwiperJS vanilla desde CDN solo una vez
if (!window.__swiper_included) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
  document.head.appendChild(script);
  window.__swiper_included = true;
}

function Carousel3({ items }) {
  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    function initSwiper() {
      if (window.Swiper && swiperRef.current) {
        new window.Swiper(swiperRef.current, {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        });
      }
    }
    if (window.Swiper) {
      initSwiper();
    } else {
      const interval = setInterval(() => {
        if (window.Swiper) {
          clearInterval(interval);
          initSwiper();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [items]);

  return (
    <div
      className="swiper"
      ref={swiperRef}
      style={{ width: '100%', maxWidth: '980px', height: '460px' }}
    >
      <div className="swiper-wrapper">
        {items.map((item, idx) => (
          <div className="swiper-slide" key={idx} style={{
            width: '300px',
            textAlign: 'center',
            background: '#fff',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <h3 style={{ padding: '10px', margin: '0' }}>{item.title}</h3>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Carousel3;