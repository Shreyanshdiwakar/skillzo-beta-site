"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PhotosSection({images}: {images: string[]}) {
  return (
    <section className="px-4 md:px-12 py-8">
      <h2 className="text-3xl font-extrabold mb-8 text-primary text-center">Programs in action</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="photos-swiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={1600}
                height={1200}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .photos-swiper {
          padding-bottom: 50px;
        }
        .photos-swiper .swiper-button-next,
        .photos-swiper .swiper-button-prev {
          color: #fbbf24;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        .photos-swiper .swiper-button-next:after,
        .photos-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
      `}</style>
    </section>
  );
}
