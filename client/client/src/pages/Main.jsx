import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Main() {
  return (
    <div className="flex flex-col w-full items-center mx-auto h-full max-h-full overflow-y-hidden opacity-95">
      <Carousel
        autoPlay={true}
        interval="3000"
        transitionTime="1000"
        infiniteLoop
        centerMode
        centerSlidePercentage={90}
        showStatus={false}
        showArrows
        showThumbs={false}
        showIndicators={false}
        width="100%"
        dynamicHeight={true}
      >
        <div>
          <img src="/images/main/1.jpg" alt="" />
        </div>
        <div>
          <img src="/images/main/2.jpeg" alt="" />
        </div>
        <div>
          <img src="/images/main/3.png" alt="" />
        </div>
        <div>
          <img src="/images/main/4.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Main;
