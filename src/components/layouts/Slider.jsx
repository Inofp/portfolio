import { useEffect, useState, useContext, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import userData from '@/constants/data';
import Image from 'next/image';
import { ActiveContext } from "@/context";
import QuoteBlock from './QuoteBlock';





SwiperCore.use([Navigation, Pagination, Autoplay]);



export default function MySwiper() {
  const [slideTitle, setSlideTitle] = useState('');
  const [slideDescriptionMain, setSlideDescriptionMain] = useState('');
  const [slideDescriptionSecondary, setSlideDescriptionSecondary] = useState('');

  const swiperRef = useRef(null);
  const swiper = swiperRef.current?.swiper;
  const { indexActive, setIndexActive } = useContext(ActiveContext);
  
  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex;
    setIndexActive(index);
  };

  useEffect(() => {
    
    if (swiper) {
      swiper.slideTo(indexActive, 2000);
    }

    setSlideTitle(userData.slider.title[indexActive]);
    setSlideDescriptionMain(userData.slider.descriptionMain[indexActive]);
    setSlideDescriptionSecondary(userData.slider.descriptionSecondary[indexActive]);
  }, [indexActive]);
  

  return (
    <div className="max-w-[560px] flex-column items-center justify-center mx-20">
      <div className="h-1/4 flex items-center justify-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          // autoplay={{ delay: 7000 }}
          // loop={false}
          // speed={2000}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
          grabCursor={true}
          ref={swiperRef}
          
        >

          {userData.slider.img.map((imgSrc, i) => (
            <SwiperSlide key={i}>
              <Image width={100} height={100} src={imgSrc} alt="" />
            </SwiperSlide>
          ))}

          
        </Swiper>
      </div>

      <div className="h-1/2 relative flex flex-col">
        <h1 className='text-center pt-7 text-4xl font-bold text-gray-900'>{slideTitle}</h1>
        <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b px-4 py-3 shadow-md">
          <div className="flex pt-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <div className="ml-3">
              <p className="text-lg font-medium text-gray-800">{ slideDescriptionMain }</p>
              <p className="mt-2 text-base text-gray-700">{slideDescriptionSecondary}</p>

            </div>
          </div>
        </div>
      </div>

      <div className='py-4'>
        <QuoteBlock/>
      </div>
      
    </div>
  );
}
